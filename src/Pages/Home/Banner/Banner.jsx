const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
      <div>
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">The Minimal Toys</h1>
          <p className="mb-5">
            Welcome to the best toy store in the country. View your desired toys
            for your children.
          </p>
          <button className="btn btn-primary font-bold">Know More</button>
        </div>
      </div>
      <img src="https://i.ibb.co/HqhwhF5/banner.jpg" alt="" />
    </div>
  );
};

export default Banner;
