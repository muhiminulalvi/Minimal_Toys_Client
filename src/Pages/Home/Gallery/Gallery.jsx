const Gallery = () => {
  return (
    <div className="px-10 py-16">
      <div className="text-center space-y-3 py-4">
        <h2 className="text-5xl font-bold text-primary">Our Gallery</h2>
        <p className="text-xl font-medium">
          See Our Stunning Gallery Images and More!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly pt-7">
        <img src="https://images.pexels.com/photos/2767817/pexels-photo-2767817.jpeg" alt="" className="w-96 h-96 rounded-md shadow-xl mb-7"/>
        <img src="https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg" alt="" className="w-96 h-96 rounded-md shadow-xl mb-7"/>
        <img src="https://images.pexels.com/photos/12956005/pexels-photo-12956005.jpeg" alt="" className="w-96 h-96 rounded-md shadow-xl mb-7"/>
        <img src="https://images.pexels.com/photos/8612924/pexels-photo-8612924.jpeg" alt="" className="w-96 h-96 rounded-md shadow-xl mb-7"/>
        <img src="https://images.pexels.com/photos/6139414/pexels-photo-6139414.jpeg" alt="" className="w-96 h-96 rounded-md shadow-xl mb-7"/>
        <img src="https://images.pexels.com/photos/6130713/pexels-photo-6130713.jpeg" alt="" className="w-96 h-96 rounded-md shadow-xl mb-7"/>
      </div>
    </div>
  );
};

export default Gallery;
