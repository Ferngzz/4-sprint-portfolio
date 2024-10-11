import './reset.css'
import './App.css'
import {ProjectCarousel} from "./components/projectCarousel.tsx";
import {TechnologyButtons} from "./components/technologyButtons.tsx";

export function App() {

    return (
        <>
            <div className="App">
                <div className="projectCarousel">
                    <ProjectCarousel/>
                </div>
                <div className="technologyButtons">
                    <TechnologyButtons/>
                </div>
            </div>
        </>
    )
}

export default App
