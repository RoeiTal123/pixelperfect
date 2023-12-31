import { Route, HashRouter as Router, Routes} from "react-router-dom";

import { AboutUs } from './pages/AboutUs';
import { MainPage } from "./pages/MainPage";

import './assets/main.scss'

function App() {
  return (
    <Router>
       <section className="main-section">
  
       <main>
         <Routes>
           <Route element={<MainPage/>} path="/"/>
           <Route element={<MainPage/>} path="/home"/>
           <Route element={<AboutUs/>} path="/about"/>
         </Routes>
       </main>

      </section>
    </Router>)
}

export default App
