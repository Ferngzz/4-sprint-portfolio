import './reset.css'
import './App.css'
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
            <div className="header">
                <Header/>
            </div>
            <div className="app">
                <div className="column left">
                    <AboutMe/>
                    <ProjectCarousel onProjectSelect={setProject}/>
                </div>
                <div className="column right">
                    <Profile/>
                    <TechnologyButtons/>
                </div>
            </div>

            { project?
                (
                    <div className="projectContainer">
                        <ProjectSection project={project}/>
                    </div>
                ) : null
            }
        </>
    )
}

export default App
