const About = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
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
