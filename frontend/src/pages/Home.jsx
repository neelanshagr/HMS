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
      />
      <Biography imageUrl={"about.jpg"} />
      <Departments />
      <MessageForm />
    </div>
  )
}

export default Home
