import cLogo from '../../../assets/icons/C.svg';
import discordLogo from '../../../assets/icons/Discord.svg';
import juiceLogo from "../../../assets/icons/Juice.svg";
import landingImg from '../../../assets/images/Mok.svg';

const Landing = () => {
  return (
    <section className='landing-section bg-img'>
        <div className="landing-section-header">
            <h1>All of your <span>community</span><br/> tools in one spot. </h1>
            <p>It is a long established fact that a reader will page when looking layout</p>
            <span className="start-btn">Start</span>
            <img className='c-logo1' src={cLogo} alt="" />
            <img className='c-logo2' src={cLogo} alt="" />
        </div>
        <div className="landing-section-body">
            <div className="landing-img">
                <img src={landingImg} alt="" width="100%"/>
            </div>
            <img className='discordLogo' src={discordLogo} alt="" />
            <img className='juiceLogo' src={juiceLogo} alt="" />
        </div>
    </section>
  )
}

export default Landing