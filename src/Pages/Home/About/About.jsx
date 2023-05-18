const About = () => {
  return (
    <div className="py-20">
      <div className="text-center space-y-3 py-4">
        <h2 className="text-4xl font-bold text-primary">About Us</h2>
        <p className="text-xl font-medium">Your Destination for Collectible Toy Cars and More!</p>
      </div>
      <div className="hero hero-content flex-col lg:flex-row-reverse gap-12">
        <img
          src="https://images.pexels.com/photos/2767817/pexels-photo-2767817.jpeg"
          
          className="max-w-lg rounded-lg shadow-3xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
