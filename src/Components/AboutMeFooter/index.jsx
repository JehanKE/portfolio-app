import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import './index.scss';

const AboutMeFooter = () => {
    return (
        <div className='footer-container'>
            <h2 className="footer-text">Get in touch</h2>
            <Fade bottom>
                <div className="footer-icons-container">
                    <a href="https://github.com/JehanKE" target="_blank" rel="noreferrer">
                        <FaGithub className="footer-icon"/>
                    </a>
                    <a href="https://twitter.com/JehanKE" target="_blank" rel="noreferrer">
                        <FaTwitter className="footer-icon"/>
                    </a>
                    <a href="https://www.instagram.com/jehan_ke/" target="_blank" rel="noreferrer">
                        <FaInstagram className="footer-icon"/>
                    </a>
                    <a href="mailto:jehanke8@gmail.com" target="_blank" rel="noreferrer">
                        <FaEnvelope className="footer-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jehan-engineer-9a0b401b0/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="footer-icon"/>
                    </a>
                </div>
            </Fade>
        </div>
    )
}

export default AboutMeFooter;
