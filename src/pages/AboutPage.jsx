import '../pages/Css/Aboutpage.css'
import img1 from '../assets/Images/Black and White Minimalist Sport Running Logo1.png'
import img2 from '../assets/Images/Sporty Gym Fitness Running Group1.png'
import img3 from '../assets/Images/Black Red Simple Modern Football Academy Logo.png'
import img4 from '../assets/Images/Black Elegant Women Fitness Instagram Post.png'
import { useState } from 'react'
function AboutPage() {
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    })
    return (
        <>
            <div className='dot-cursor'
                style={{
                    left: cursorX + 'px',
                    top: cursorY + 'px'
                }}>
            </div>
            <div className='line-cursor'
                style={{
                    left: cursorX + 'px',
                    top: cursorY + 'px'
                }}>
            </div>
            <div id="aboutpage" className="w-[100%] h-full">
                <div className='sponsers '>
                    <div className='left'>
                        <p className='text-4xl font-bold text-white'>970K+</p><br />
                        <p className='text-lg text-white'>Trusted Companies Partnership</p>
                    </div>
                    <div className='right flex space-x-4'>
                        <img src={img1} alt='sponser-img1' />
                        <img src={img2} alt='sponser-img2' />
                        <img src={img3} alt='sponser-img3' />
                    </div>
                </div>
                <div className='greet'>
                    <div className='left'>
                        <img src={img4} className='w-[70%] rounded-lg' alt='ftiness-women0-image' />
                    </div>
                    <div className='right'>
                        <h1 className='text-5xl text-white font-semibold'>Get Ready to Reach <br /> Your Fitness Goals</h1>
                        <div className='sub-content py-6 text-white'>
                            <p className=''>We are a gym that is committed to helping people reach their fitness goals.We offer a variety of thiers programs and services to fit your needs,whether you are a experianced athlete.</p>
                            <p>We believe that everyone should have access to the benefits of exercise make it happen.</p>
                        </div>
                        <button className='bg-[#ff1616] p-3 shadow-lg text-white rounded-md'>Free Trail Today</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage
