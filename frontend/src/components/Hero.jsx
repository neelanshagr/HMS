
const Hero = ({ title, imageUrl, description }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          {description}
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          
        </div>
      </div>
    </>
  );
};

export default Hero;