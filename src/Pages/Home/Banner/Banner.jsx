const Banner = () => {
  return (
    <div
      className="hero min-h-[600px]"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/4488190/pexels-photo-4488190.jpeg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-50 rounded-sm"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">The Minimal Toys</h1>
          <p className="mb-5">
            Welcome to the best toy store in the country. View your desired toys for your children.
          </p>
          <button className="btn btn-primary font-bold">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
