import "./Footer.css";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; 2024 Myntra Clone. All rights reserved.</p>
                <p className="text-sm mt-2">Designed and Developed by Your Name</p>
            </div>
            <div className="container mx-auto text-center mt-4">
                <Link to="/about" className="text-sm text-gray-400 hover:text-white mx-2">About Us</Link>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-white mx-2">Contact Us</Link>
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-white mx-2">Privacy Policy</Link>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-white mx-2">Terms of Service</Link>
            </div>

            <div>
                <p className="text-sm text-gray-400 mt-4">Follow us on:</p>
                <div className="social-icons mt-2 flex justify-center ">
                    <Link to="https://www.facebook.com/myntra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="https://www.twitter.com/myntra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="https://www.instagram.com/myntra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/company/myntra" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                </div>
            </div>

        </footer>
    );
};

export default Footer;