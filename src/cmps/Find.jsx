import { Link } from "react-router-dom"
import logo from '../assets/imgs/myteam.png'

export function Find(){

    return (<section className="find">
              <div className="find-header">

                <div className="links">
                <Link  to={`/`} className="logo"><img src={logo}/></Link>
                <Link  to={`/home`}>home</Link>
                <Link  to={`/about`}>about</Link>
                </div>


                <Link  to={`/about`} className="btn">contact us</Link>
              </div>
              <div className="find-description">
                <div className="title">Find the
                best <span>talent</span></div>
                <p className="description">Finding the right people and building high performing teams can be hard. 
                Most companies arent tapping into the abundance of global talent. Were about to change that.</p>
              </div>
            </section>)
}