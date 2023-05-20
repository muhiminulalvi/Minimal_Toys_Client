import { FaBattleNet, FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer p-10 bg-gray-50 items-center">
          <div className="space-y-2">
            
            <h1 className="text-3xl text-primary font-extrabold flex items-center"><FaBattleNet size={60}/> <span>Minimal Toys</span></h1>
            <p className="font-medium">
              The Minimal Toys LTD.
              <br />
              Providing reliable TOys since 2013
            </p>
            <p className="font-medium">Sordarpara, Park More, Rangpur, Bangladesh</p>
          </div>
          <div>
            <span className="text-xl text-primary font-bold">Pages</span>
            <a className="link link-hover font-medium">Home</a>
            <a className="link link-hover font-medium">All Toy</a>
            <a className="link link-hover font-medium">Add Toy</a>
            <a className="link link-hover font-medium">Blog</a>
          </div>
          <div>
            <span className="text-xl text-primary font-bold">Information</span>
            <a className="link link-hover font-medium">About us</a>
            <a className="link link-hover font-medium">Contact us</a>
            <a className="link link-hover font-medium">Login</a>
            <a className="link link-hover font-medium">Registration</a>
          </div>
          <div>
            <span className="text-xl text-primary font-bold">Social</span>
            <div className="flex items-center">
            <FaFacebookSquare size={30} className="text-primary"/><FaTwitterSquare size={30} className="text-primary"/><FaInstagramSquare size={30} className="text-primary"/>
            </div>
          </div>
        </footer>
      </div>
      <footer className="footer footer-center p-4 bg-zinc-100 text-base-content font-bold">
        <div>
          <p>Copyright © 2023 - All right reserved by The Minimal Toys Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
