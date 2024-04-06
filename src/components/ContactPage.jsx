import Navbar from "./Navbar"
import contactbanner from '../assets/banners/contact.png'
import './css/contactus.css'
import phone from '../assets/icons/icons8-phone-60.png'
import mail from '../assets/icons/icons8-send-60.png'
import FooterPage from "./FooterPage"
import { useState } from "react"
function ContactPage() {

    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [msg, setmsg] = useState()

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        const userInput = window.prompt("Please rate our Website out of 5"); // Display the prompt and store user input
        if (userInput) {
            alert("Thank You! Visit again !!!")
            setname("")
            setemail("")
            setmsg("")
        } else {
            handleSubmit();// Log a message if user cancels the prompt
        }
    };

    return (
        <>
            <section className="w-full h-screen bg-black">
                <Navbar />
                <div className="intro">
                    <img src={contactbanner} alt="intro-img" />
                    <span className="text-7xl font-bold text-white" id="intro-text">Contact Us</span>
                </div>
                <div className="contact-design">
                    <div className="box-1 w-44">
                        <p className="text-sm text-[#ff1616]">Contact us Whenever</p>
                        <p className="text-2xl font-bold text-white" id="contact-text">All Questions and feedbacks are always welcome!</p>
                    </div>
                    <div className=" bg-[#fff] p-10">
                        <img src={phone} alt="phone-icon" />
                        <p className="pt-2 text-xl">Call Service</p>
                        <p className="text-sm">+8 8803 4405</p>
                    </div>
                    <div className="bg-[#ff1616] text-white p-10">
                        <img src={mail} className="text-white" alt="phone-icon" />
                        <p className="pt-2 text-xl">Mail Service</p>
                        <p className="text-sm">linebeatfs.org.com</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h1 className="title text-center">BEST WAY TO GET IN TOUCH</h1>
                    <form className="flex flex-col items-center  gap-y-5 mt-6" id="con-form" onSubmit={handleSubmit}>
                        <div className="row-1 flex gap-x-6">
                            <div className="flex flex-col justify-start">
                                <label className="text-white text-[13px] pb-1" htmlFor="name">Name</label>
                                <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} className="bg-[#2e2e2f] text-white text-[13px] p-2 w-[250px]" placeholder="Your Name" required name="name" />
                            </div>
                            <div className="flex flex-col justify-start">
                                <label htmlFor="email" className="text-white text-[13px] pb-1">Email</label>
                                <input type="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} className="bg-[#2e2e2f] text-white  text-[13px] p-2 w-[250px]" placeholder="Your Email" required name="email" />
                            </div>
                        </div>
                        <div className="row-2">
                            <textarea cols="" value={msg} onChange={(e) => setmsg(e.target.value)} rows="6" className="bg-[#2e2e2f] text-white  text-[13px] p-2 w-[525px]" placeholder="Message"></textarea>
                        </div>
                        <button id="sub-btn" type="submit">Submit</button>
                    </form>
                </div>
                <FooterPage />
            </section>
        </>
    )
}

export default ContactPage
