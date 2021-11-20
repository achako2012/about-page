import React, { useContext, useState } from 'react';
import ReactDom from 'react-dom';
import { Button, Form, Input } from 'reactstrap';
import axios, { AxiosError } from 'axios';
import AuthService from '../api/services/auth-service';
import { AuthContext } from '../context/AuthContext';
import '../styles/LoginModal.css';

interface LoginModalProps {
    open: any;
    onClose: any;
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
    const articlesService = AuthService.create();
    const auth = useContext(AuthContext);

    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const changeHandler = (event: { target: { name: any; value: any } }) => {
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

    if (!open) return null;

    return ReactDom.createPortal(
        <div
            style={{
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)'
            }}
        >
            <div
                style={{
                    padding: 20,
                    background: '#fff',
                    borderRadius: '4px',
                    display: 'inline-block',
                    minHeight: '300px',
                    margin: '1rem',
                    position: 'relative',
                    minWidth: '450px',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                    justifySelf: 'center'
                }}
            >
                <div className="modal-content">
                    <div className="modal-title">Login into the app</div>
                    <div className="modal-body">
                        {error ? <p style={{ color: 'red' }}>{error}</p> : null}
                        <Form className="login-wrapper">
                            <Input
                                type="email"
                                name="email"
                                id="emailInput"
                                placeholder="email"
                                onChange={changeHandler}
                            />
                            <Input
                                type="password"
                                name="password"
                                id="passwordInput"
                                placeholder="password"
                                onChange={changeHandler}
                            />
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <Button
                            type="submit"
                            id="submitButton"
                            color="secondary"
                            size="sm"
                            onClick={() => loginHandler()}
                        >
                            Submit
                        </Button>
                        <Button
                            type="button"
                            id="closeButton"
                            color="danger"
                            size="sm"
                            onClick={onClose}
                        >
                            Close modal
                        </Button>
                    </div>
                </div>
            </div>
        </div>,
        // TODO fix
        // @ts-ignore
        document.getElementById('loginModal')
    );
};

export default LoginModal;
