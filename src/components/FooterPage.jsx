import './css/Footer.css';
import { ChevronRight, Dumbbell, FacebookIcon, InstagramIcon, Mail, MapPin, PhoneCall, TimerIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
function FooterPage() {
    return (
        <div className='footer'>
            <footer>
                <div>
                    <h1 className='flex ml-2 items-center gap-x-2 text-[#ff1616] font-bold text-4xl mb-6'>LINEBEAT <span><Dumbbell color='#fff' size={22} /></span></h1>
                    <ul>
                        <li className='flex items-center gap-x-2 text-white'><MapPin color='#ff1616' size={15} /> Mangalam,Tirupathi</li>
                        <li className='flex items-center gap-x-2 text-white'> <Mail color='#ff1616' size={15} /> support@gmail.com</li>
                        <li className='flex items-center gap-x-2 text-white'> <PhoneCall color='#ff1616' size={15} /> (+62)81 2343 7643</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[#ff1616] font-bold text-xl'>Quick Links</h1>
                    <ul>
                        <li className='flex items-center gap-x-2 text-white'><ChevronRight color='#ff1616' size={15} />About Us</li>
                        <li className='flex items-center gap-x-2 text-white'><ChevronRight color='#ff1616' size={15} />Programs</li>
                        <li className='flex items-center gap-x-2 text-white'><ChevronRight color='#ff1616' size={15} />Membership</li>
                        <li className='flex items-center gap-x-2 text-white'><ChevronRight color='#ff1616' size={15} />Contacts</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[#ff1616] font-bold text-xl'>Useful Links</h1>
                    <ul>
                        <li className='flex items-center gap-x-2 text-white'><ChevronRight color='#ff1616' size={15} />Privacy Ploicy</li>
                        <li className='flex items-center gap-x-2 text-white'><ChevronRight color='#ff1616' size={15} />Terms and Conditions</li>
                        <li className='flex items-center gap-x-2 text-white'><ChevronRight color='#ff1616' size={15} />Disclaimer</li>
                        <li className='flex items-center gap-x-2 text-white'><ChevronRight color='#ff1616' size={15} />FAQ</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[#ff1616] font-bold text-xl mb-1'>Work Hours</h1>
                    <p className='flex items-center gap-x-2 text-white mb-2'><TimerIcon color='#ff1616' size={20} /> 9 AM - 10 PM, Monday - Saturday</p>
                    <p className='text-zinc-400 mb-1'>Convenience is key to maintaining a consistent fitness routine.We offer flexible gym timings.</p>
                    <button id='join-btn' className='px-3 py-2 bg-[#ff1616] mt-3 shadow-lg text-white'>Join with US</button>
                </div>
            </footer>
            <div className='flex flex-wrap gap-4 items-center justify-evenly'>
                <h1 className='flex items-center gap-x-2 text-[#ff1616] font-bold text-xl '><span><Dumbbell color='#ff1616' size={22} /></span>LINEBEAT</h1>
                <p className='text-white '>&copy; LINEBEAT | All rights are reserved 2024</p>
                <ul className='flex items-center gap-x-2'>
                    <li className='bg-[#fff] rounded-[50%] p-[2px] hover:bg-transparent transition-all duration-300'><FacebookIcon size={18} color='#ff1616' /></li>
                    <li className='bg-[#fff] rounded-[50%] p-[2px] hover:bg-transparent transition-all duration-300'><InstagramIcon size={18} /></li>
                    <li className='bg-[#fff] rounded-[50%] p-[2px] hover:bg-transparent transition-all duration-300'><TwitterIcon size={18} /></li>
                    <li className='bg-[#fff] rounded-[50%] p-[2px] hover:bg-transparent transition-all duration-300'><YoutubeIcon size={18} /></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterPage
