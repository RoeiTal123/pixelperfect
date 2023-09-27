import { Link } from "react-router-dom"
import logo from '../assets/imgs/myteam.png'

export function About(){

    return (<section className="about">
              <div className="about-header">

                <div className="links">
                <Link  to={`/`} className="logo"><img src={logo}/></Link>
                <Link  to={`/home`}>home</Link>
                <Link  to={`/about`}>about</Link>
                </div>


                <Link  to={`/about`} className="btn">contact us</Link>
              </div>
              <div className="about-description">
                <div className="title">About</div>
                <p className="description">We help companies build dynamic teams made up of top global talent.
                 Using our network of passionate professionals we drive innovation and deliver incredible outcomes.
                 Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
              </div>
            </section>)
}