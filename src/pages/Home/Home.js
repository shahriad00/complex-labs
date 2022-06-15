import CommunicationSystem from "../../components/Home/CommunicationSystem/CommunicationSystem"
import Landing from "../../components/Home/Landing/Landing"
import Newsletter from "../../components/Home/Newsletter/Newsletter"
import OurTeam from "../../components/Home/OurTeam/OurTeam"

const Home = () => {
  return (
    <div className="homepage"> 
         <Landing/>
         <CommunicationSystem/>
         <Newsletter/>
         <OurTeam/>
    </div>
  )
}

export default Home