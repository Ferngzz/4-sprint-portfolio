import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {ReactElement} from "react";

export function ProjectCarousel() {

    const projectsProps = {
        width: '400px',
        backgroundColor: '#FFFFFF',
        padding: '1.25rem',
        border: '5px solid #F39422',
        borderRadius: '15px',
        boxShadow: '5px 5px 5px #293A80',
        "--swiper-pagination-color": '#F39422',
        "--swiper-pagination-bullet-inactive-color": '#F39422',
    }


    const projects: string[] = [
        "https://superprix.vteximg.com.br/arquivos/ids/175172-600-600/Batata-Especial--1-unidade-aprox.-200g-.png?v=636294173813730000",
        "https://superprix.vteximg.com.br/arquivos/ids/175172-600-600/Batata-Especial--1-unidade-aprox.-200g-.png?v=636294173813730000",
        "https://superprix.vteximg.com.br/arquivos/ids/175172-600-600/Batata-Especial--1-unidade-aprox.-200g-.png?v=636294173813730000",
        "https://superprix.vteximg.com.br/arquivos/ids/175172-600-600/Batata-Especial--1-unidade-aprox.-200g-.png?v=636294173813730000",
    ];

    const projectSlides = (projects: string[]) => {
        const p: ReactElement[] = [];
        projects.forEach((project: string) => {
            p.push(
                <SwiperSlide
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <img width={200} height={200} src={project} alt="Project Image"/>
                </SwiperSlide>
            );
        });
        return p;
    }

    return (
        <div className="projectCarousel">
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
