import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaEnvelopeOpenText,
  FaPhoneSquareAlt,
  FaLocationArrow,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 px-5 my-7">
      <div className="space-y-4 py-4">
        <h2 className="text-5xl font-bold text-primary">Get In Touch</h2>
        <p className="text-xl font-medium">
          Find More Products on Your Website and Explore. We always serve our
          best quality to all of our clients.
        </p>
        <div className="space-y-2">
          <p className="flex gap-3 font-bold text-2xl items-center">
            <FaEnvelopeOpenText size={30} color="#ff3811" />{" "}
            contact@minimaltoy.com
          </p>
          <p className="flex gap-3 font-bold text-2xl items-center">
            <FaPhoneSquareAlt size={30} color="#ff3811" /> +880 1100 375 869
          </p>
          <p className="flex gap-3 font-bold text-2xl items-center">
            <FaLocationArrow size={20} color="#ff3811" /> Sordarpara, Park More,
            Rangpur, Bangladesh{" "}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FaFacebookSquare size={40} color="#ff3811" />
          <FaTwitterSquare size={40} color="#ff3811" />
          <FaInstagramSquare size={40} color="#ff3811" />
          <FaWhatsappSquare size={40} color="#ff3811" />
        </div>
      </div>
      <div>
        <form className=" py-6 px-9 bg-primary rounded-md">
          <div className="flex items-center justify-between w-full gap-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-white">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-white">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Subject</span>
          </label>
          <input type="text" placeholder="Subject" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Message</span>
          </label>
          <textarea name="" id="" placeholder="Your Messages" rows="05" className="w-full border-2 py-1 px-1 rounded"></textarea>
        </div>
        <div className="form-control py-3">
          <input type="submit" value="Send Message" className="btn btn-warning font-bold"/>
        </div>
        
        </form>
      </div>
    </div>
  );
};

export default Contact;
