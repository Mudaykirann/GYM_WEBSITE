
import './css/testimonialPage.css';
import { useState } from 'react';
import t1 from '../assets/icons/testimonial-2.jpg';
import t2 from '../assets/icons/testimonial-3.jpg';
import t3 from '../assets/icons/testimonial-4.jpg';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0); // Initialize currentIndex to 0

    const testimonials = [
        {
            image: t1,
            name: 'Jane Marga',
            rating: '⭐⭐⭐⭐⭐',
            content: "Joining this gym was one of the best decisions I've ever made for my health.The variety of classes keeps things interesting, and the trainers are always available to offer guidance and encouragement. Thanks to this gym, I've not only achieved my fitness goals but surpassed them."
        },
        {
            image: t2,
            name: 'John Doe',
            rating: '⭐⭐⭐⭐',
            content: "I joined this gym six months ago, and it has been an incredible journey. The trainers are not just instructors but mentors who genuinely care about your progress. The atmosphere here is so motivating; it's like a second home. The equipment is top-notch, and the classes are challenging yet fun. I've seen amazing results in my fitness level and overall well-being."
        },
        {
            image: t3,
            name: 'Farhan Rio',
            rating: '⭐⭐⭐⭐⭐',
            content: "I've been a member of this gym for over a year now, and I can confidently say it's changed my life. The team here is dedicated to helping you reach your fitness goals, no matter your starting point. The facility is clean, spacious, and equipped with everything you need for a great workout. What sets this gym apart is the sense of camaraderie among members. Whether you're a beginner or a seasoned athlete, everyone is welcomed with open arms."
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonial">
            <div className="testimonial-left">
                <h1 className='text-white text-6xl font-bold pb-4 pt-2'>What Our Happy Clients <br /> Say About Us</h1>
                <p className=' text-xl text-[#ccc] pt-2 w-[75%]'>I've been a member of fitness within for about 6 months now and i absolutely love it! The trainers are so much motivate and they really help to reach fitness goals.</p>
            </div>
            <div className="testimonial-right">
                <div className="testimonial-slider">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`slide-container ${index === currentIndex ? 'active' : ''}`}>
                            <div className='banner'>
                                <img src={testimonial.image} alt={testimonial.name} />
                                <div className='detail'>
                                    <h1 className='text-xl text-[#fff] font-semibold'>{testimonial.name}</h1>
                                    <p>{testimonial.rating}</p>
                                </div>
                            </div>
                            <br />
                            <p className='text-white text-lg' >{testimonial.content}</p>
                        </div>
                    ))}
                </div>
                <button className="prev-btn" onClick={prevSlide}><ArrowLeft /></button>
                <button className="next-btn" onClick={nextSlide}><ArrowRight /></button>
            </div>
        </div>
    );
}

export default Testimonial;

