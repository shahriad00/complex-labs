import CommunicationSystem from "../../components/Home/CommunicationSystem/CommunicationSystem"
import Landing from "../../components/Home/Landing/Landing"
import Newsletter from "../../components/Home/Newsletter/Newsletter"

const Home = () => {
  return (
    <div className="homepage"> 
         <Landing/>
         <CommunicationSystem/>
         <Newsletter/>
    </div>
  )
}

export default Home