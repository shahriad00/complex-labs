import communication from '../../../assets/icons/communication-icon.svg';
import management from '../../../assets/icons/management.svg';
import passport from '../../../assets/icons/passport.svg';
import proposal from '../../../assets/icons/proposal.svg';
import mokup from '../../../assets/images/communication-img.svg';


const COMMU_INFO = [
    {
        id: 1,
        img : communication,
        title : 'Communications',
        info : "Contrary to popular belief, Lorem Ipsum is not simply random text. It Latin literature."
    },
    {
        id: 2,
        img : passport,
        title : 'Community Passport',
        info : "Contrary to popular belief, Lorem Ipsum is not simply random text. It Latin literature."
    },{
        id: 3,
        img : proposal,
        title : 'Proposal',
        info : "Contrary to popular belief, Lorem Ipsum is not simply random text. It Latin literature."
    },{
        id: 4,
        img : management,
        title : 'Project Management',
        info : "Contrary to popular belief, Lorem Ipsum is not simply random text. It Latin literature."
    },
]

const CommunicationSystem = () => {
  return (
    <section className='communication-system'>
        <div className="container">
            <div className="communication-system-upper">
                <div className="communication-system-upper-left">
                    <h2>
                        We are building both an inhouse <span>peer to peer communication</span> system
                    </h2>
                    <p>
                        readable content page when looking at its layout point 
                        of using Lorem Ipsum is that it has a more-less normal distribution fact that a reader.
                    </p>
                </div>
                <div className="communication-system-upper-right">
                    {
                        COMMU_INFO.map((info,i)=>(
                            <div key={i} className="communication-single">
                                <img src={info.img} alt=""/>
                                <h5>{info.title}</h5>
                                <p>{info.info}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="communication-system-bottom">
                <div className="communication-system-bottom-left">
                    <img src={mokup} alt="" />
                </div>
                <div className="communication-system-bottom-right">
                    <h2>
                        We are building both an inhouse <span>peer to peer communication</span> system
                    </h2>
                    <p>
                        readable content page when looking at its layout point 
                        of using Lorem Ipsum is that it has a more-less normal distribution fact that a reader.
                    </p>
                    <span className='communication-btn'>Start Now</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CommunicationSystem