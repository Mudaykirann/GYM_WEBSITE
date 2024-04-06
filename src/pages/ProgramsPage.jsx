import { ArrowRight, Clock10, Heart, ThumbsUp, Gem } from 'lucide-react'
import '../pages/Css/ProgramPage.css'
import gym from '../assets/icons/icons8-gym-48.png'
import yoga from '../assets/icons/icons8-yoga-64.png';
import muscle from '../assets/icons/icons8-muscle-64.png'
import run from '../assets/icons/icons8-running-64.png'
import { useState } from 'react'
function ProgramsPage() {
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
            <div className='programpage'>
                <div className='heading my-4 text-center'>
                    <h1 className='text-4xl font-semibold text-white'>Our Services</h1>
                    <p className='text-white py-2'>Welcome to our gym & fitness training center. <br /> sore today,strong tommorow.Improve your Fitness Today.</p>
                </div>
                <div className='boxes'>
                    <div className=" box relative flex flex-col mt-6 text-white bg-[#464646] shadow-lg bg-clip-border  w-72">
                        <div className="px-6 pt-6 ">
                            <div className='img flex items-center justify-between'>
                                <img src={gym} alt="" />
                                <h1 className='text-3xl text-[#37383c] font-bold'>01</h1>
                            </div>
                            <h5 className="block mb-2 mt-6 text-2xl antialiased font-semibold leading-snug tracking-normal ">
                                Strength Training
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                A type of exercise that causes your muscles to contract against an outside resistance.
                            </p>
                        </div>
                        <div className="px-2 py-4">
                            <a href="#" className=" text-white inline-block">
                                <button
                                    className="flex items-center gap-2 px-4 py-2 font-sans text-[15px]  text-center   align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                    type="button">
                                    Learn More <ArrowRight size={15} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className=" box relative flex flex-col mt-6 text-white bg-[#464646] shadow-lg bg-clip-border  w-72">
                        <div className="px-6 pt-6 ">
                            <div className='img flex items-center justify-between'>
                                <img src={yoga} alt="" />
                                <h1 className='text-3xl text-[#37383c] font-bold'>02</h1>
                            </div>
                            <h5 className="block mb-2 mt-3 text-2xl antialiased font-semibold leading-snug tracking-normal ">
                                Basic Yoga
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                A type of exercise that causes your muscles to contract against an outside resistance.
                            </p>
                        </div>
                        <div className="px-2 py-4">
                            <a href="#" className=" text-white inline-block">
                                <button
                                    className="flex items-center gap-2 px-4 py-2 font-sans text-[15px]  text-center   align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                    type="button">
                                    Learn More <ArrowRight size={15} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className=" box relative flex flex-col mt-6 text-white bg-[#464646] shadow-lg bg-clip-border  w-72">
                        <div className="px-6 pt-6 ">
                            <div className='img flex items-center justify-between'>
                                <img src={muscle} alt="" />
                                <h1 className='text-3xl text-[#37383c] font-bold'>03</h1>
                            </div>
                            <h5 className="block mb-2 mt-3 text-2xl antialiased font-semibold leading-snug tracking-normal ">
                                Body Building
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                A type of exercise that causes your muscles to contract against an outside resistance.
                            </p>
                        </div>
                        <div className="px-2 py-4">
                            <a href="#" className=" text-white inline-block">
                                <button
                                    className="flex items-center gap-2 px-4 py-2 font-sans text-[15px]  text-center   align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                    type="button">
                                    Learn More <ArrowRight size={15} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className=" box relative flex flex-col mt-6 text-white bg-[#464646] shadow-lg bg-clip-border  w-72">
                        <div className="px-6 pt-6 ">
                            <div className='img flex items-center justify-between'>
                                <img src={run} alt="" />
                                <h1 className='text-3xl text-[#37383c] font-bold'>04</h1>
                            </div>
                            <h5 className="block mb-2 mt-3 text-2xl antialiased font-semibold leading-snug tracking-normal ">
                                Weight Loss
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                A type of exercise that causes your muscles to contract against an outside resistance.
                            </p>
                        </div>
                        <div className="px-2 py-4">
                            <a href="#" className=" text-white inline-block">
                                <button
                                    className="flex items-center gap-2 px-4 py-2 font-sans text-[15px]  text-center   align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                    type="button">
                                    Learn More <ArrowRight size={15} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='achievments '>
                <div className='achievment-item flex flex-col items-center gap-y-1 '>
                    <Clock10 size={22} />
                    <p className="text-xl font-semibold pt-1">1248</p>
                    <p className='font-[200]'>Working hours</p>
                </div>
                <div className='achievment-item flex flex-col items-center gap-y-1 '>
                    <Heart size={22} />
                    <p className="text-xl font-semibold pt-1">2084</p>
                    <p className='font-[200]'>Happy clients</p>
                </div>
                <div className='achievment-item flex flex-col items-center gap-y-1 '>
                    <ThumbsUp size={22} />
                    <p className="text-xl font-semibold pt-1">537</p>
                    <p className='font-[200]'>Success Stories</p>
                </div>
                <div className='achievment-item flex flex-col items-center gap-y-1 '>
                    <Gem size={22} />
                    <p className="text-xl font-semibold pt-1">862</p>
                    <p className='font-[200]'>Perfect Bodies</p>
                </div>
            </div>
        </>
    )
}

export default ProgramsPage
