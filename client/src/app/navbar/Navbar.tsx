import React, { useContext } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../../context-provider/AuthContext';
import './Navbar.css';
import { Burger } from './components/burger/Burger';
import NavigationElements from './components/navigation-elements/NavigationElements';

interface NavbarProps {
    onClickModal: any;
}

export const Navbar: React.FC<NavbarProps> = ({ onClickModal }) => {
    const auth = useContext(AuthContext);

    const loginButtons = (
        <div className="login-buttons">
            <button className="authenticate-button-login" type="button" onClick={onClickModal}>
                alex
            </button>
            <FiLogIn className="authenticate-icon-login" onClick={onClickModal} />
        </div>
    );

    const logoutButtons = (
        <div className="logout-buttons">
            <button
                className="authenticate-button-logout"
                type="button"
                onClick={() => auth.logout()}
            >
                logout
            </button>
            <FiLogOut className="authenticate-icon-logout" onClick={() => auth.logout()} />
        </div>
    );

    return (
        <header>
            <nav className="nav-wrapper">
                {auth.isAuthenticated ? logoutButtons : loginButtons}
                <NavigationElements view="view-row" />
                <Burger />
            </nav>
        </header>
    );
};

export default Navbar;
