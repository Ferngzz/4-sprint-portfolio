import './reset.css'
import './App.css'
import {ProjectCarousel} from "./components/projectCarousel.tsx";
import {TechnologyButtons} from "./components/technologyButtons.tsx";
import {Header} from "./components/header.tsx";
import {Profile} from "./components/profile.tsx";
import {Description2} from "./components/description2.tsx";

export function App() {

    return (
        <>
                <div className="header">
                    <Header/>
                </div>
            <div className="app">
                <div className="column left">
                    <Description2/>
                    <ProjectCarousel/>
                </div>
                <div className="column right">
                    <Profile/>
                    <TechnologyButtons/>
                </div>
            </div>
        </>
    )
}

export default App
