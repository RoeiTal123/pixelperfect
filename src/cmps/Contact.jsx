import { Link } from "react-router-dom"
import logo from '../assets/imgs/myteam.png'

export function Contact() {
  return (
    <section className="contact">
      <div className="contact1">
        <section className="contact-us">
            <span> Ready to get started? </span>
            <Link  to={`/about`} className="btn">contact us</Link>
        </section>
      </div>
      <div className="contact2">
        <section className="contact-information">
            <div className="links">
                <Link  to={`/`} className="logo"><img src={logo}/></Link>
                <div className="inner-links">
                <Link  to={`/home`}>home</Link>
                <Link  to={`/about`}>about</Link>
                </div>
            </div>
            <div className="location">
            <span>987  Hillcrest Lane</span>
            <span>Irvine, CA</span>
            <span>California 92714</span>
            <span>Call Us : 949-833-7432</span>
            </div>
            <div className="credit">
                <div className="socials"> 
                   <i className="fa-brands fa-square-facebook"></i>
                   <i className="fa-brands fa-pinterest"></i>
                   <i className="fa-brands fa-twitter"></i>
                </div>
                <div>
                    Coffeeright 2020. All Rights Reserved
                </div>
            </div>
        </section>
      </div>
    </section>
  )
}
