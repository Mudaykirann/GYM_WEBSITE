import { useEffect } from 'react';
import AboutPage from './AboutPage';
import ProgramsPage from './ProgramsPage';
import PricePlans from '../components/PricePlans';
import BMICalc from '../components/BMICalc';
import Testimonial from '../components/Testimonial';
import GymAmentities from '../components/GymAmentities';
import FooterPage from '../components/FooterPage';
import Navbar from '../components/Navbar';
import bannerimg from '../assets/Images/Professional Fitness Training YouTube Thumbnail  (601 x 702 px).png';
import { useState } from 'react';
import './Css/LandingPage.css';

function LandingPage() {
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();


    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorX(e.clientX);
            setCursorY(e.clientY);
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <>
            <div className='dot-cursor' style={{ left: cursorX + 'px', top: cursorY + 'px' }}></div>
            <div className='line-cursor' style={{ left: cursorX + 'px', top: cursorY + 'px' }}></div>
            <div id='landing'>
                <Navbar />
                <div id='home-content'>
                    <div className='home-left'>
                        <div className='content my-2'>
                            <p className='text-5xl font-bold'>MAKE<br /><span className='text-9xl text-[#ff1616]'>FITNESS</span><br />A LIFESTYLE</p>
                        </div>
                        <div className='line'></div>
                        <div className='content2'>
                            <p>we are always there to help you to make a healthy body and mind through the power of fitness</p>
                        </div>
                        <div className='join-btn'>
                            <button id='btn' className='px-4 py-2 my-2 '>Join now !</button>
                        </div>
                        <div className='specialties'>
                            <div className='box one'>
                                <p className='text-[24px] font-bold'>105+</p><br />
                                <p>Expert Trainers</p>
                            </div>
                            <div className='box two'>
                                <p className='text-[24px] font-bold'>970+</p><br />
                                <p>Members Joined</p>
                            </div>
                            <div className='box three'>
                                <p className='text-[24px] font-bold'>135+</p><br />
                                <p>Fitness Programs</p>
                            </div>
                        </div>
                    </div>
                    <div className='home-right'>
                        <img src={bannerimg} className='w-[80%]' alt='banner-img' />
                    </div>
                </div>
            </div>
            <div className='pages'>
                <AboutPage />
                <ProgramsPage />
                <PricePlans />
                <BMICalc />
                <GymAmentities />
                <Testimonial />
                <FooterPage />
            </div>
        </>
    );
}

export default LandingPage;
