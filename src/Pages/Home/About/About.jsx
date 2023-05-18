const About = () => {
  return (
    <div className="py-20">
      <div className="text-center space-y-3 py-4">
        <h2 className="text-5xl font-bold text-primary">About Us</h2>
        <p className="text-xl font-medium">Your Destination for Collectible Toy Cars and More!</p>
      </div>
      <div className="hero hero-content flex-col lg:flex-row-reverse gap-12">
        <img
          src="https://images.pexels.com/photos/2767817/pexels-photo-2767817.jpeg"
          
          className="max-w-lg rounded-lg shadow-3xl"
        />
        <div className=" space-y-4 px-4">
          <h1 className="text-4xl font-bold text-secondary">Welcome To Minimal Toys</h1>
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
