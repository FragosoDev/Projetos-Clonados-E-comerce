import "./footer.css"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/"><img src="../assets/images/logo.png" alt="logo"/></Link>
            <div className="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Facere molestiae id officia, veniam cum dolore doloribus harum 
                dolorum vitae quasi quia illo nostrum, repellendus at tempore minus alias.
              </p>
            </div>
          </div>
          <div className="col">
            <h3>Quick Link</h3>
            <div className="nav">
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/products'>Products</Link>
                </li>
                <li>
                  <Link to='/'>About</Link>
                </li>
                <li>
                  <Link to='/'>Contact</Link>
                </li>
            
              </ul>
            </div>
          </div>
          <div className="col">
            <h3>Follow Us</h3>
            <div className="right">
              <Link to='/'><FaFacebook /></Link>
              <Link to='/'><FaInstagram /></Link>
              <Link to='/'><FaTwitter /></Link>
             
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr/>
            <div className="copyRights">
              <div className="copy">&copy; 2022. All Rights Reserved.
              Powered by Anna Ierchenko
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer