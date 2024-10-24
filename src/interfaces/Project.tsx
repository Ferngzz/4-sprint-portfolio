import {Technology} from "./Technology.tsx";


export interface Project {
    name: string;
    description: string;
    learned: string;
    image: string;
    technologies: Technology[];
    demoURL: string;
    githubURL: string;
}