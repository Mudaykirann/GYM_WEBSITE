import Navbar from "./Navbar"
import img from '../assets/banners/program.png'
import './css/programpage.css'
import gym from '../assets/icons/icons8-gym-48.png'
import yoga from '../assets/icons/icons8-yoga-64.png';
import muscle from '../assets/icons/icons8-muscle-64.png'
import run from '../assets/icons/icons8-running-64.png'
import PYOGA from '../assets/Images/PYOGA.png'
import PSTR from '../assets/Images/PSTRENGTH.png'
import WLOSs from '../assets/Images/PWEIGHTLOSS.png'
import BODY from '../assets/Images/PBODYBILDING.png'
import banner1 from '../assets/banners/2.png'
import PricePlans from "./PricePlans";
import FooterPage from "./FooterPage";
function ProgramsPage() {
    return (
        <>
            <section className="w-full h-screen bg-black">
                <Navbar />
                <div className="intro">
                    <img src={img} alt="intro-img" />
                    <span className="text-7xl font-bold text-white" id="intro-text">ProgRams</span>
                </div>



                <div className="program-boxes">
                    <div className="cards">
                        <div className="card">
                            <div className="image">
                                <img src={PYOGA} alt="yoga" className="" />
                            </div>
                            <div className="icon"><img src={yoga} alt="toga" /></div>
                            <div className="card-body ">
                                <p className="title">YOGA</p>
                                <p className="text-[15px] text-[#ff1616c9]">David Joe,John Conever</p>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image ">
                                <img src={PSTR} alt="yoga" />
                            </div>
                            <div className="icon"><img src={muscle} alt="toga" /></div>
                            <div className="card-body">
                                <p className="title">MUSCLE</p>
                                <p className="text-[15px] text-[#ff1616c9]">David Joe,John Conever</p>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image ">
                                <img src={BODY} alt="yoga" />
                            </div>
                            <div className="icon"><img src={gym} alt="toga" /></div>
                            <div className="card-body">
                                <p className="title">YOGA</p>
                                <p className="text-[15px] text-[#ff1616c9]">David Joe,John Conever</p>
                                <button>read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="image ">
                                <img src={WLOSs} alt="yoga" />
                            </div>
                            <div className="icon"><img src={run} alt="toga" /></div>
                            <div className="card-body">
                                <p className="title">WEIGHT LOSS</p>
                                <p className="text-[15px] text-[#ff1616c9]">David Joe,John Conever</p>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image ">
                                <img src={WLOSs} alt="yoga" />
                            </div>
                            <div className="icon"><img src={run} alt="toga" /></div>
                            <div className="card-body">
                                <p className="title">YOGA</p>
                                <p className="text-[15px] text-[#ff1616c9]">David Joe,John Conever</p>
                                <button>read more</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image ">
                                <img src={WLOSs} alt="yoga" />
                            </div>
                            <div className="icon"><img src={run} alt="toga" /></div>
                            <div className="card-body">
                                <p className="title">YOGA</p>
                                <p className="text-[15px] text-[#ff1616c9]">David Joe,John Conever</p>
                                <button>read more</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="advertise">
                    <img src={banner1} />
                    <div className="advertise-content">
                        <p className="small">FITNESS CLASSES THIS SUMMER</p>
                        <h3 className="offer">30% <span>OFF</span></h3>
                        <p className="danger">WHEN REGISTERING FOR THE FIRST TIME</p>
                        <p className="para">Join us as we embark on a transformative journey towards better health and vitality.</p>
                        <button className="mt-8" id="reg-btn">REGISTER NOW</button>
                    </div>
                </div>
                <PricePlans />
                <FooterPage />
            </section>
        </>
    )
}

export default ProgramsPage
