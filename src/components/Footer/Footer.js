import facebook from "../../assets/icons/facebook-logo.svg";
import instagram from "../../assets/icons/instagram.svg";
import logo from "../../assets/icons/logo.svg";
import twitter from "../../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">        
            <div className="footer-header">
                <img src={logo} alt="" />
                <h5>
                    Complex Labs will onboard <br/><span>Web2 organizations</span> to Web3.
                </h5>
            </div>
            <div className="footer-links-wrapper">
                <div className="footer-link">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Comparison</li>
                        <li>Pricing</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="social-link-wrapper">
                    <div className="social-link">
                        <a href="/"><img src={facebook} alt=""/></a>
                        <a href="/"><img src={twitter} alt=""/></a> 
                        <a href="/"><img src={instagram} alt=""/></a>
                    </div>
                    <p>Complex Labs is building a product to enable a network</p>
                </div>
            </div>
            <div className="footer-bottom">

            </div>
        </div>
    </footer>
  )
}

export default Footer