import { Find } from "../cmps/Find"
import { Build } from "../cmps/Build"
import { Reviews } from "../cmps/Reviews"
import { Creators } from "../cmps/Creators"
import { Clients } from "../cmps/Clients"
import { Contact } from "../cmps/Contact"

export function MainPage(){
    return (<section>
             <Find/>
             <Build/>
             <Reviews/>
             <Contact/>
            </section>)
}