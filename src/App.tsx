import './App.css'
import {ProjectCarousel} from "./components/projectCarousel.tsx";
import {TechnologyButtons} from "./components/technologyButtons.tsx";

export function App() {

    return (
        <>
            <div>
                <ProjectCarousel/>
            </div>
            <div>
                <TechnologyButtons/>
            </div>
        </>
    )
}

export default App
