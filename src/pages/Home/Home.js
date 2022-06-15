import CommunicationSystem from "../../components/Home/CommunicationSystem/CommunicationSystem"
import Landing from "../../components/Home/Landing/Landing"

const Home = () => {
  return (
    <div className="homepage"> 
         <Landing/>
         <CommunicationSystem/>
    </div>
  )
}

export default Home