import './reset.css'
import './App.css'
import {ProjectCarousel} from "./components/projectCarousel.tsx";
import {TechnologyButtons} from "./components/technologyButtons.tsx";
import {Description} from "./components/description.tsx";
import {Header} from "./components/header.tsx";

export function App() {

    return (
        <>
                <div className="header">
                    <Header/>
                </div>
            <div className="app">
                <div className="column">
                    <Description/>
                    <ProjectCarousel/>
                </div>
                <div className="column">
                    <TechnologyButtons/>
                </div>
            </div>
        </>
    )
}

export default App
