import {Project} from "../interfaces/Project.tsx";
import {ReactElement} from "react";

interface ProjectSectionProps {
    project?: Project | undefined
}

export function ProjectSection({project}: ProjectSectionProps) {

    function genTechnologies() {
        const t: ReactElement[] = [];

        project?.technologies.forEach((technology) => {
            t.push(
                <div className="projectTechnology">
                    <img width={32} height={32} src={technology.url}/>
                    <text>{technology.name}</text>
                </div>
            );
        });
        return t;
    }

    return (
        <div className="projectSection">
            <div className="projectHeader">
                <text>{project?.name}</text>
            </div>

            <div className="bodyContainer">
                <div className="projectBody">
                    <div className="projectProgression">
                        <div className="whatIveDone">
                            <text>What I've done:</text>
                        </div>
                        <text className="projDescription">{project?.description}</text>
                    </div>
                    <div className="projectInfo">
                        <div className="projectUsedTechnologies">
                            <text className="whatIveUsed">What I've used:</text>
                            <div className="projectTechnologies">
                                {genTechnologies()}
                            </div>
                        </div>
                    </div>

                    <div className="projectDemo">
                        <div className="demoText">
                            <text className="whatIveDone">What I've learned:</text>
                            <text className="learned">{project?.learned}</text>
                        </div>

                        <a href={project?.url} target={"_blank"}>
                            <div className="buttonBg">
                                <button className="demoButton">
                                    <text>Demo</text>
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}