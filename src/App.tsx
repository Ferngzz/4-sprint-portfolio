import './reset.css'
import './App.css'
import {ProjectCarousel} from "./components/projectCarousel.tsx";
import {TechnologyButtons} from "./components/technologyButtons.tsx";
import {Header} from "./components/header.tsx";
import {Profile} from "./components/profile.tsx";
import {Name} from "./components/name.tsx";
import {Description} from "./components/description.tsx";

export function App() {

    return (
        <>
                <div className="header">
                    <Header/>
                </div>
            <div className="app">
                <div className="column left">
                    <Name/>
                    <Description/>
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
