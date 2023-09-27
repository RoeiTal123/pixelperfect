import { About } from "../cmps/About"
import { Creators } from "../cmps/Creators"
import { Clients } from "../cmps/Clients"
import { Contact } from "../cmps/Contact"

export function AboutUs(){
    return (<section>
             <About/>
             <Creators/>
             <Clients/>
             <Contact/>
            </section>)
}