import { FaBattleNet } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            
            <h1 className="text-3xl text-primary font-extrabold flex items-center"><FaBattleNet size={60}/> <span>Minimal Toys</span></h1>
            <p className="font-medium">
              The Minimal Toys LTD.
              <br />
              Providing reliable TOys since 2013
            </p>
          </div>
          <div>
            <span className="footer-title font-bold">Services</span>
            <a className="link link-hover font-medium">Branding</a>
            <a className="link link-hover font-medium">Design</a>
            <a className="link link-hover font-medium">Marketing</a>
            <a className="link link-hover font-medium">Advertisement</a>
          </div>
          <div>
            <span className="footer-title font-bold">Company</span>
            <a className="link link-hover font-medium">About us</a>
            <a className="link link-hover font-medium">Contact</a>
            <a className="link link-hover font-medium">Jobs</a>
            <a className="link link-hover font-medium">Press kit</a>
          </div>
          <div>
            <span className="footer-title font-bold">Legal</span>
            <a className="link link-hover font-medium">Terms of use</a>
            <a className="link link-hover font-medium">Privacy policy</a>
            <a className="link link-hover font-medium">Cookie policy</a>
          </div>
        </footer>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content font-bold">
        <div>
          <p>Copyright © 2023 - All right reserved by The Minimal Toys Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
