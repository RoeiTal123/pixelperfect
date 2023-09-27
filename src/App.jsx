import { Route, HashRouter as Router, Routes} from "react-router-dom";

import {About} from './cmps/About'
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
           <Route element={<MainPage/>} path="/about"/>
         </Routes>
       </main>

      </section>
    </Router>)
}

export default App
