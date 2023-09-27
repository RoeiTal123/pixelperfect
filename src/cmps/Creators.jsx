import { Link } from "react-router-dom"
import profile1 from '../assets/imgs/avatar-nikita.jpg'
import profile2 from '../assets/imgs/avatar-christian.jpg'
import profile3 from '../assets/imgs/avatar-cruz.jpg'

export function Creators() {
  return (
    <section className="creators">

      <section className="title">
        <h1>Meet the directors</h1>
      </section>

      <section className="creator-profiles">

        <section className="profile">
        <img src={profile1}/>
        <p className="name">Nikita Marks</p>
        <p className="position">Founder & CEO</p>
        <Link  to={`/about`} className="btn">+</Link>
        </section>

        <section className="profile">
        <img src={profile2}/>
        <p className="name">Christian Duncan</p>
        <p className="position">Co-founder & COO</p>
        <Link  to={`/about`} className="btn">+</Link>
        </section>

        <section className="profile">
        <img src={profile3}/>
        <p className="name">Cruz Hamer</p>
        <p className="position">Co-founder & CTO</p>
        <Link  to={`/about`} className="btn">+</Link>
        </section>

      </section>

    </section>
  )
}
