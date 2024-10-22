import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import projectData from "../assets/data/projectData.json"
import {Project} from "../interfaces/Project.tsx"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {ReactElement} from "react";


interface ProjectCarouselProps {
    onProjectSelect?: (project: Project) => void
}

export function ProjectCarousel(props: ProjectCarouselProps) {

    const projectsProps = {
        width: '400px',
        backgroundColor: 'transparent',
        border: '5px solid #F39422',
        borderRadius: '15px',
        boxShadow: '2px 2px 2px #293A80',
        "--swiper-pagination-color": '#F39422',
        "--swiper-pagination-bullet-inactive-color": '#F39422',
    }


    const projects: Project[] = [
        projectData.climaApp,
        projectData.calculadora,
    ];

    const projectSlides = (projects: Project[]) => {
        const p: ReactElement[] = [];
        projects.forEach((project: Project) => {
            p.push(
                <SwiperSlide
                    onClick={() => {
                        props.onProjectSelect?.(project)
                    }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <img src={project.image} alt="Project Image"/>
                </SwiperSlide>
            );
        });
        return p;
    }


    return (
        <div className="projectCarousel">
            <div>
                <text>Projects</text>
            </div>
            <Swiper
                style={projectsProps}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={400}
                slidesPerView={1}
                loop={true}
                pagination={{clickable: true}}
                autoplay={{delay: 5000}}
            >
                {projectSlides(projects)}
            </Swiper>
        </div>
    );
}
