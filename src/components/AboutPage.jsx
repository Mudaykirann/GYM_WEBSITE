import Navbar from "./Navbar"
import './css/aboutus.css'
import img from '../assets/banners/gympic.png'
import Slider from "react-slick";
import aboutimg1 from '../assets/Images/aboutus1.png'
import aboutimg2 from '../assets/Images/aboutus2.png'
import aboutimg3 from '../assets/Images/aboutus3.png'
import aboutimg4 from '../assets/Images/aboutus4.png'
import Testimonial from "./Testimonial";
import phonebanner from '../assets/banners/phonebanner.png'
import FooterPage from "./FooterPage";
function AboutPage() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className="w-full h-screen bg-black">
                <Navbar />
                <div className="intro">
                    <img src={img} alt="intro-img" />
                    <span className="text-7xl font-bold text-white" id="intro-text">About Us</span>
                </div>
                <div className="second-intro bg-[#2e2e2f]">
                    <div className="box text-white">
                        <span className="text-[#ff1616] text-sm font-semibold">Line-Beat</span>
                        <h2 className="text-5xl font-bold">Welcome to Our GYM</h2>
                        <p className="mt-8 mb-5 w-[70%]" id="para1">we pride ourselves on offering top-notch facilities and equipment to cater to a diverse range of fitness needs. From state-of-the-art cardio machines and weightlifting equipment to energizing group exercise classes.</p>
                        <p className="mt-8 mb-5 w-[70%]" id="para2">At our gym, we prioritize the well-being and satisfaction of our members. We maintain strict hygiene and safety protocols to ensure a clean and safe workout environment. Additionally, our flexible membership options allow you to choose a plan that fits your schedule and budget, making it easier than ever to prioritize your health and fitness.</p>
                        <button className="bg-[#ff1616] p-3 rounded-lg shadow-sm hover:shadow-2xl">Get Started</button>
                    </div>
                    <Slider className="slider" {...settings}>
                        <div className="w-[50px]"><img src={aboutimg1} className="rounded-lg" /></div>
                        <div className="w-[50px]"><img src={aboutimg2} className="rounded-lg" /></div>
                        <div className="w-[50px]"><img src={aboutimg3} className="rounded-lg" /></div>
                        <div className="w-[50px]"><img src={aboutimg4} className="rounded-lg" /></div>
                    </Slider>
                </div>
                <Testimonial />
                <div className="third-intro bg-black">
                    <img src={phonebanner} alt="phone-banner image" />
                    <div className="third-intro-text">
                        <p className="text-sm">CALL US TODAY</p>
                        <p className="text-5xl text-white font-semibold" id="number">+ 8 (800) 695 3489</p>
                        <p className="w-[75%] py-2 mx-auto" id="text">Our friendly staff is available to answer your inquiries and provide any information you may need.</p>
                        <button className="bg-[#ff1616] p-3  text-white rounded-lg shadow-xl" id="free-btn">Free Trail</button>
                    </div>
                </div>
                <FooterPage />
            </section>
        </>
    )
}

export default AboutPage
