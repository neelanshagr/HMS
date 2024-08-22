import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/appointment">Appointment</Link>
          <Link to="/about">About Us</Link>
        </div>
        
        <div className="footer-info">
          <p>© 2024 HMS</p>
          <p>Designed with ♥ by 
            <a href="https://github.com/neelanshagr" target="_blank" rel="noopener noreferrer" className="footer-github-link"> Neelanshagr</a> & 
            <a href="https://github.com/Kesar25" target="_blank" rel="noopener noreferrer" className="footer-github-link"> Kesar25</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
