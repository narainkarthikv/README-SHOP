import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&#169; 2024 Open-Source Project - 
                <a className="link" href="https://www.github.com/Wisdom-Fox/README-SHOP"
                    target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                </a>
                &nbsp;
                Developed By
                <a className="link" href="https://www.github.com/Wisdom-Fox"
                    target="_blank" rel="noopener noreferrer">
                    Wisdom Fox Community
                </a>
            </p>
        </footer>
    );
}

export default Footer;
