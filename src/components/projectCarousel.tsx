import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export function ProjectCarousel() {

    const props = {
        width: '300px',
        padding: '1.25rem',
        border: '6px solid #EAEAEA',
        borderRadius: '30px',
        boxShadow: '5px 5px 5px #000000',
        "--swiper-pagination-color": '#000000',
        "--swiper-pagination-bullet-inactive-color": '#000000',
    }

    
    const projects:string[] = [
        "https://superprix.vteximg.com.br/arquivos/ids/175172-600-600/Batata-Especial--1-unidade-aprox.-200g-.png?v=636294173813730000",
        "https://static.vecteezy.com/system/resources/previews/033/302/785/non_2x/onion-with-ai-generated-free-png.png",
        "https://acdn.mitiendanube.com/stores/002/296/660/products/tomate-png-1280x7201-36283e6b10aef947e616606979966621-1024-1024.png",
        "https://sitioaborigene.com.br/wp-content/uploads/2021/08/mandioca.png",
    ];

    const projectSlides = (projects: string[]) => {
        const p = [];
        projects.forEach((project: string) => {
            p.push(
                <SwiperSlide>
                    <img height={200} src={project}/>
                </SwiperSlide>
            );
        });
        return p;
    };

    return (
        <div  className="projectCarousel">
            <Swiper
                style={props}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={400}
                slidesPerView={1}
                loop={true}
                pagination={{clickable: true}}
                autoplay={{delay: 5000}}
            >
                { projectSlides(projects) }
            </Swiper>
        </div>
    );
}
