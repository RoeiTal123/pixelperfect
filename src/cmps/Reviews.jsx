import { Link } from "react-router-dom"
import profile1 from '../assets/imgs/avatar-kady.jpg'
import profile2 from '../assets/imgs/avatar-aiysha.jpg'
import profile3 from '../assets/imgs/avatar-arthur.jpg'

export function Reviews() {
  return (
    <section className="reviews">

      <section className="title">
        <h1>Delivering real results for top companies. 
            Some of our <span>success stories.</span></h1>
      </section>

      <section className="review-profiles">

        <section className="profile">
        <p className="review"> “The team perfectly fit the specialized skill set required.
         They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
        <p className="name">Kady Baker</p>
        <p className="position">Product Manager at Bookmark</p>
        <img src={profile1}/>
        </section>

        <section className="profile">
        <p className="review">“We needed to automate our entire onboarding process.
         The team came in and built out the whole journey.
         Since going live, user retention has gone through the roof!”</p>
        <p className="name">Aiysha Reese</p>
        <p className="position">Founder of Manage</p>
        <img src={profile2}/>
        </section>

        <section className="profile">
        <p className="review"> “Amazing. Our team helped us build an app that delivered
         a new experience for hiring a physio.
         The launch was an instant success with 100k downloads in the first month.”</p>
        <p className="name">Arthur Clarke</p>
        <p className="position">Co-founder of MyPhysio</p>
        <img src={profile3}/>
        </section>

      </section>

    </section>
  )
}
