import { Link } from "react-router-dom"

import logo1 from '../assets/imgs/logo-the-verge.png'
import logo2 from '../assets/imgs/logo-jakarta-post.png'
import logo3 from '../assets/imgs/logo-the-guardian.png'
import logo4 from '../assets/imgs/logo-tech-radar.png'
import logo5 from '../assets/imgs/logo-gadgets-now.png'

export function Clients(){
    return (<section className="clients">
              <section className="title">
                Some of our clients
              </section>
              <section className="brands">

                <Link>
                <img className='verge' src={logo1}/>
                </Link>

                <Link>
                <img className='jakarta' src={logo2}/>
                </Link>
                
                <Link>
                <img className='guardian' src={logo3}/>
                </Link>

                <Link>
                <img className='tech' src={logo4}/>
                </Link>

                <Link>
                <img className='gadgets' src={logo5}/>
                </Link>

              </section>
            </section>)
}