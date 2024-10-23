import './AppOutput.css'
import {ProjectCarousel} from "./components/projectCarousel.tsx";
import {TechnologyButtons} from "./components/technologyButtons.tsx";
import {Header} from "./components/header.tsx";
import {Profile} from "./components/profile.tsx";
import {AboutMe} from "./components/aboutMe.tsx";
import {ProjectSection} from "./components/projectSection.tsx";
import {Project} from "./interfaces/Project.tsx";
import {useState} from "react";


export function App() {

    const [project, setProject] = useState<Project>();

    return (
        <>
            <div>
                <Header/>
            </div>
            <div>
                <div>
                    <AboutMe/>
                    <ProjectCarousel onProjectSelect={setProject}/>
                </div>
                <div>
                    <Profile/>
                    <TechnologyButtons/>
                </div>
            </div>

            { project?
                (
                    <div>
                        <ProjectSection project={project}/>
                    </div>
                ) : null
            }
        </>
    )
}

export default App
