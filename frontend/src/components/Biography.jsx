
const Biography = ({imageUrl}) => {
    return (
      <>
        <div className="container biography">
          <div className="banner">
            <img src={imageUrl} alt="whoweare" />
          </div>
          <div className="banner">
            <p>Biography</p>
            <h3>Who We Are</h3>
            <p>
            At HMS, we are committed to transforming healthcare management through innovation and technology. Our mission is to create a seamless experience for both patients and healthcare providers by integrating advanced tools and processes into everyday hospital operations. We believe in a patient-first approach, where the ease of accessing quality healthcare services is at the heart of what we do. From scheduling appointments to managing medical records, our system is designed to provide a streamlined, user-friendly platform that meets the needs of modern healthcare.
            </p>
            <p>We are all in 2024!</p>
            <p>
            Our team consists of dedicated professionals with a deep understanding of the healthcare industry and a passion for leveraging technology to solve complex challenges. We work closely with hospitals and clinics to ensure that our solutions are not only efficient but also adaptable to the unique needs of each institution. Through continuous research and development, we strive to stay at the forefront of healthcare innovation, providing solutions that enhance patient care, improve operational efficiency, and ensure data security and compliance. Our goal is to empower healthcare providers with the tools they need to focus on what matters most—delivering exceptional care to their patients.
            </p>
    
          </div>
        </div>
      </>
    );
  };
  
  export default Biography;
