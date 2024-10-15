import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFlip} from "swiper/modules";


export function Description() {

    const swiperProps = {
        width: '600px',
        height: '200px',
    }

    return (
        <div className="description">
            <Swiper
                effect='flip'
                style={swiperProps}
                allowTouchMove={false}
                slidesPerView={1}
                onClick={(mySwiper) => {
                        if (mySwiper.isEnd) {
                            mySwiper.slidePrev()
                        } else {
                            mySwiper.slideNext()
                        }
                    }
                }
                modules={[EffectFlip]}
            >
                <SwiperSlide
                    className="descriptionSlide"
                >
                    <div>Hello, I'm <text style={{color: "#FFFFFF"}}>Potato!</text></div>
                </SwiperSlide>
                <SwiperSlide
                    className="descriptionSlide"
                >
                    <div>I like potato, potato and potato!</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}