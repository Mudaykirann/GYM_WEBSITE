import { useState } from 'react';
import { Check } from 'lucide-react';
import '../components/css/priceplans.css'
function PricePlans() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

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
            <div className="price-page bg-[#292b37] w-full">
                <h1 className="text-white text-4xl text-center py-4">Price Plans</h1>
                <div className="Tabs flex justify-center mx-auto my-2 border border-[#ff1616] bg-[#2e2e2f]   rounded-lg  w-[15%]">
                    <button
                        className={`px-4 py-2 focus:outline-none w-[50%] overflow-hidden m-1 rounded-lg ${activeTab === 1 ? 'bg-gray-200 text-black' : 'bg-transparent text-white '
                            } transition duration-300 ease-in-out`}
                        onClick={() => handleTabClick(1)}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-4 py-2 focus:outline-none w-[50%] overflow-hidden m-1 rounded-lg ${activeTab === 2 ? 'bg-gray-200 text-black' : 'bg-transparent text-white'
                            } transition duration-300 ease-in-out`}
                        onClick={() => handleTabClick(2)}
                    >
                        Yearly
                    </button>
                </div>
                <div className='flex w-[100%] justify-center items-center mx-auto'>
                    <div className="m-4 p-4 prices  rounded-lg">
                        {activeTab === 1 && (
                            <div className='monthly'>
                                <div className='grids text-white'>
                                    <div className='grid'>
                                        <p>DISCOVER</p>
                                        <h1 className='my-4'><b className='text-6xl '>$99</b>/Per Month</h1>
                                        <ul className='list my-4 text-center'>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 5 classes per month</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 4 group classes per monthly</li>
                                            <li className='flex items-center gap-x-2 pt-1 text-gray-400 '><Check size={15} /> Online class access</li>
                                            <li className='flex items-center gap-x-2 pt-1 text-gray-400'><Check size={15} />E-Book fitness guide</li>
                                        </ul>
                                        <button className='border rounded-[25px] p-1 my-4'>Choose Plan</button>
                                    </div>
                                    <div className='grid'>
                                        <p>ENTERPRISE</p>
                                        <h1 className='my-4'><b className='text-6xl '>$299</b>/Per Month</h1>
                                        <ul className='list my-2 text-center'>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 10 classes per month</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 8 group classes per monthly</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> Online classes access</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> E-book Finess guide</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 7 Extra fitness training</li>
                                        </ul>
                                        <button className='border rounded-[25px] p-1 my-4 bg-white text-black'>Choose Plan</button>
                                    </div>
                                    <div className='grid'>
                                        <p>PROFESSIONAL</p>
                                        <h1 className='my-4'><b className='text-6xl '>$199</b>/Per Month</h1>
                                        <ul className='list my-1 text-center'>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 7 classes per month</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 6 group classes per monthly</li>
                                            <li className='flex items-center gap-x-2 pt-1 text-gray-500 '><Check size={15} /> Online class access</li>
                                            <li className='flex items-center gap-x-2 pt-1 text-gray-500'><Check size={15} />E-Book fitness guide</li>
                                        </ul>
                                        <button className='border rounded-[25px] p-1 my-4'>Choose Plan</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div className='yearly'>
                                <div className='grids text-white'>
                                    <div className='grid'>
                                        <p>DISCOVER</p>
                                        <h1 className='my-4'><b className='text-6xl '>$1099</b>/Per Annum</h1>
                                        <ul className='list my-4 text-center'>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 60 classes per month</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 50 group classes per monthly</li>
                                            <li className='flex items-center gap-x-2 pt-1 text-gray-400 '><Check size={15} /> Online class access</li>
                                            <li className='flex items-center gap-x-2 pt-1 text-gray-400'><Check size={15} />E-Book fitness guide</li>
                                        </ul>
                                        <button className='border rounded-[25px] p-1 my-4'>Choose Plan</button>
                                    </div>
                                    <div className='grid'>
                                        <p>ENTERPRISE</p>
                                        <h1 className='my-4'><b className='text-6xl '>$2099</b>/Per Annum</h1>
                                        <ul className='list my-2 text-center'>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 120 classes per month</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 90 group classes per monthly</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> Online classes access</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> E-book Finess guide</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 80 Extra fitness training</li>
                                        </ul>
                                        <button className='border rounded-[25px] p-1 my-4 bg-white text-black'>Choose Plan</button>
                                    </div>
                                    <div className='grid'>
                                        <p>PROFESSIONAL</p>
                                        <h1 className='my-4'><b className='text-6xl '>$1599</b>/Per Annum</h1>
                                        <ul className='list my-1 text-center'>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 90 classes per month</li>
                                            <li className='flex items-center gap-x-2 pt-1'><Check size={15} /> 80 group classes per monthly</li>
                                            <li className='flex items-center gap-x-2 pt-1 text-gray-500 '><Check size={15} /> Online class access</li>
                                            <li className='flex items-center gap-x-2 pt-1 text-gray-500'><Check size={15} />E-Book fitness guide</li>
                                        </ul>
                                        <button className='border rounded-[25px] p-1 my-4'>Choose Plan</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricePlans;
