
import human from '../assets/imgs/human.png'
import cogwheel from '../assets/imgs/cogwheel.png'
import graph from '../assets/imgs/graph.png'

export function Build(){
    return (<section className="build">
              <section className="title">
              Build & manage distributed teams like no one else.
              </section>
              <section className="description">

                <div className="paragraph">
                    <img src={human}/>
                    <div className='paragraph-description'>
                    <span>Experienced Individuals</span>
                    <p>Our network is made up of highly experienced 
                        professionals who are passionate about what they do.</p>
                    </div>
                </div>

                <div className="paragraph">
                    <img src={cogwheel}/>
                    <div className='paragraph-description'>
                    <span>Easy to Implement</span>
                    <p>Our processes have been refined over years
                         of implementation meaning our teams always deliver.</p>
                    </div>
                </div>

                <div className="paragraph">
                    <img src={graph}/>
                    <div className='paragraph-description'>
                    <span>Enhanced Productivity</span>
                    <p>Our customized platform with in-built analytics
                         helps you manage your distributed teams.</p>
                    </div>
                </div>

              </section>
            </section>)
}