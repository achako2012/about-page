import React from "react";
import ReactDom from "react-dom";
import '../styles/LoginModal.css'
import {Button, Form, Input} from "reactstrap";

interface LoginModalProps {
    open: any,
    onClose:any
}

export const LoginModal: React.FC<LoginModalProps> = ({open, onClose}) => {

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={ {
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)'
            } }>
                <div
                    style={ {
                        padding: 20,
                        background: '#fff',
                        borderRadius: '4px',
                        display: 'inline-block',
                        minHeight: '300px',
                        margin: '1rem',
                        position: 'relative',
                        minWidth: '450px',
                        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                        justifySelf: 'center',
                    } }
                >
                    <div className="modal-content">
                        <div className="modal-title">
                            Login into the app
                        </div>
                        <div className="modal-body">
                            <Form className='login-wrapper'>
                                <Input type="email" name="email" id="emailInput" placeholder="email"/>
                                <Input type="password" name="password" id="passwordInput" placeholder="password"/>
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <Button type="submit" id="submitButton" color="secondary" size="sm">Submit</Button>
                            <Button type="button" id="closeButton" color="danger" size="sm" onClick={ onClose }>Close
                                modal</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        // @ts-ignore
        document.getElementById("loginModal")
    )
};
