import '../App.css'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
    <div>
      <Hero
        title={
          "Welcome to HMs | Your Trusted Healthcare Provider"
        }
        imageUrl={"doc.png"}
        description={"At HMS, we believe that quality healthcare should be accessible to everyone. Our Hospital Management System is designed to simplify your healthcare experience, from booking appointments with top specialists to securely managing your medical records. With our user-friendly platform, you can effortlessly navigate through your healthcare journey, ensuring that your well-being is always our top priority. Join us in making healthcare smarter, safer, and more accessible."}
      />
      <Biography imageUrl={"about.jpg"} />
      <Departments />
      <MessageForm />
    </div>
  )
}

export default Home
