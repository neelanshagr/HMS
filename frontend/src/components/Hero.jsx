
const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At HMS, we believe that quality healthcare should be accessible to everyone. Our Hospital Management System is designed to simplify your healthcare experience, from booking appointments with top specialists to securely managing your medical records. With our user-friendly platform, you can effortlessly navigate through your healthcare journey, ensuring that your well-being is always our top priority. Join us in making healthcare smarter, safer, and more accessible.
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