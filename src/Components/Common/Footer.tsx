import { Link } from "react-router-dom";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer pax">
        <div className="footer-logo">
          <Link to="/">
            <img src="/asset/IBB_expand_blue.svg" alt="" />
          </Link>
        </div>
        <ul className="footer row">
          <li className="col">
            <Link to="/">Home</Link>
          </li>
          <li className="col">
            <Link to="/about">About Us</Link>
          </li>
          <li className="col">
            <Link to="/business">Business</Link>
          </li>
          <li className="col">
            <Link to="/connect">Connect</Link>
          </li>
          <li className="col">
            <Link to="/terms">Terms</Link>
          </li>
          <li className="col">
            <Link to="/invoices">Invoice Details</Link>
          </li>
        </ul>

        <div className="footer-icons">
          <div className="single-social">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="single-social">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="single-social">
            <i className="fab fa-facebook-f"></i>
          </div>
        </div>
        <div className="divider"></div>
        <div className="copyright">
          <Link to="#">&copy; 2021 IBB Praha</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;