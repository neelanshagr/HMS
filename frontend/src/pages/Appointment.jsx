import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | HMS"}
        imageUrl={"appointment.jpg"}
        description={"Welcome to our appointment booking page. Here, you can easily schedule your visit with our expert doctors. Please fill out the form below with your personal details, including your preferred appointment date and time. If you're a returning patient, be sure to check the 'Have you visited before?' option to help us access your previous records swiftly. Once you've completed the form, click 'GET APPOINTMENT' to confirm your booking. We strive to provide you with a seamless and efficient appointment experience, ensuring your healthcare needs are met with the utmost care and professionalism."

}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;