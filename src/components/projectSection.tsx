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
                <div>
                    <img src={technology.iconURL} alt="Technology Icon"/>
                    <text>{technology.name}</text>
                </div>
            );
        });
        return t;
    }

    return (
        <div>
            <div>
                <text>{project?.name}</text>
            </div>

            <div>
                <div>
                    <div>
                        <div>
                            <text>What I've done:</text>
                        </div>
                        <text>{project?.description}</text>
                    </div>
                    <div>
                        <div>
                            <text>What I've used:</text>
                            <div>
                                {genTechnologies()}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <text>What I've learned:</text>
                            <text>{project?.learned}</text>
                        </div>

                        <a href={project?.demoURL} target={"_blank"}>
                            <div>
                                <button>
                                    <text>Demo</text>
                                </button>
                            </div>
                        </a>
                        <a href={project?.githubURL} target={"_blank"}>
                            <div>
                                <button>
                                    <text>GitHub Repository</text>
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}