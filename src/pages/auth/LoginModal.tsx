import React, { useContext, useState } from 'react';
import ReactDom from 'react-dom';
import { Button, Form, Input } from 'reactstrap';
import axios, { AxiosError } from 'axios';
import AuthService from 'api/services/auth-service';
import { AuthContext } from 'context-provider/AuthContext';
import './LoginModal.scss';

interface LoginModalProps {
    isModalOpen: boolean;

    onClose(): void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isModalOpen, onClose }) => {
    const articlesService = AuthService.create();
    const auth = useContext(AuthContext);

    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const changeHandler = (event: { target: { name: string; value: string } }) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const loginHandler = async () => {
        try {
            const data = await articlesService.getUserToken(form.email, form.password);
            auth.login(data.token, data.userId);
            onClose();
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const axiosError: AxiosError = err;
                setError(axiosError?.response?.data?.message);
                return;
            }
            throw err;
        }
    };

    if (!isModalOpen) return null;

    const loginModal = document.getElementById('loginModal');

    return loginModal
        ? ReactDom.createPortal(
              <div className="auth-modal-wrapper">
                  <div className="auth-modal-content">
                      <div className="modal-content">
                          <div className="modal-title">Login into the app</div>
                          <div className="modal-body">
                              {error ? (
                                  <p data-about-id="error-message" style={{ color: 'red' }}>
                                      {error}
                                  </p>
                              ) : null}
                              <Form className="login-wrapper">
                                  <Input
                                      type="email"
                                      name="email"
                                      id="emailInput"
                                      placeholder="email"
                                      data-about-id="email-input"
                                      onChange={changeHandler}
                                  />
                                  <Input
                                      type="password"
                                      name="password"
                                      id="passwordInput"
                                      placeholder="password"
                                      data-about-id="password-input"
                                      onChange={changeHandler}
                                  />
                              </Form>
                          </div>
                          <div className="modal-footer">
                              <Button
                                  type="button"
                                  id="closeButton"
                                  color="danger"
                                  size="sm"
                                  onClick={onClose}
                              >
                                  Close modal
                              </Button>
                              <Button
                                  type="submit"
                                  id="submitButton"
                                  color="secondary"
                                  size="sm"
                                  data-about-id="submit-button"
                                  onClick={() => loginHandler()}
                              >
                                  Submit
                              </Button>
                          </div>
                      </div>
                  </div>
              </div>,
              loginModal
          )
        : null;
};

export default LoginModal;
