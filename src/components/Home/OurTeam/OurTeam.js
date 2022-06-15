import logo from "../../../assets/icons/logo.svg";
import team1 from "../../../assets/images/team1.png";
import team2 from "../../../assets/images/team2.png";
import team3 from "../../../assets/images/team3.png";
import team4 from "../../../assets/images/team4.png";


const TEAM = [
    {
        id: 1,
        img : team1,
        name : 'Scott Mandel',
        position : 'Chief executive officer'
    },
    {
        id: 2,
        img : team2,
        name : 'Joshua Jack',
        position : 'Chief information officer'
    },
    {
        id: 3,
        img : team3,
        name : 'Ryan Turner',
        position : 'Chief technology officer'
    },
    {
        id: 4,
        img : team4,
        name : 'Pasquale Scaife',
        position : 'Chief product officer'
    },
]

const OurTeam = () => {
  return (
    <section className="our-team container">
        <div className="our-team-header">
            <h5>Our Dedicated Team</h5>
        </div>
        <div className="our-team-members-wrapper">
            {
                TEAM.map((team,i)=>(
                    <div key={i} className="single-member">
                        <div className="single-img">
                            <img src={team.img} alt="" />
                            <span className="logo-icon">
                                <img src={logo} alt="" width="100%"/>
                            </span>
                        </div>
                        <div className="single-info">
                            <h5>{team.name}</h5>
                            <p>{team.position}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default OurTeam