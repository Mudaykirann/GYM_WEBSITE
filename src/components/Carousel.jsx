
import { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import '../pages/Css/Carousel.css'

function Carousel({ images }) {
    useEffect(() => {
        const mySwiper = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 2,
            spaceBetween: 30,
            scrollbar: {
                clickable: true,
            }
        });
        return () => {
            mySwiper.destroy();
        };
    }, []);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper mx-auto pl-10">
                {images.map((image, index) => (
                    <div key={index} className="swiper-slide">
                        <div className="image"><img src={image} className="shadow-lg" alt={`Slide ${index + 1}`} /></div>
                        <div className="swiper-content">
                            <h1 className="text-xl text-[#ff1616] font-bold py-1">Gym/Fitness Trainer</h1>
                            <p className="text-white text-sm py-1" >He/She motivate and inspire clients to push their limits and support throughout their fitness journey.</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    )
}

export default Carousel



