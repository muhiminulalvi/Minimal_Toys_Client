import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  AOS.init(
    {
      duration: 200, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the original trigger point
      easing: 'ease', // Animation easing
      delay: 0, // Delay between each animation
      once: true, // Only animate elements once
      mirror: false, // Reflect animations when scrolling in reverse
    }
  );
  return (
    <div className="py-20">
      
      <div className="hero hero-content flex-col lg:flex-row-reverse gap-12">
        <img
          src="https://images.pexels.com/photos/2767817/pexels-photo-2767817.jpeg"
          
          className="max-w-lg rounded-lg shadow-3xl"
        />
        <div className=" space-y-4 px-4" data-aos="fade-right">
          <h1 className="text-5xl font-bold text-secondary">About Minimal Toys</h1>
          <p className="font-medium">
          Your ultimate destination for all things related to collectible toy cars! We are passionate enthusiasts dedicated to bringing you the finest selection of high-quality toy cars, ranging from vintage classics to modern marvels. 
          </p>
          <p className="font-medium">
          Explore our virtual showroom and embark on a thrilling journey through the world of miniature automobiles. Get ready to rev up your imagination and create unforgettable memories with Minimal TOys!
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
