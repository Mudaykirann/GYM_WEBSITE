
import { X, MenuIcon } from 'lucide-react'
import logo from '../assets/icons/Black & Red Line Beat Fitness Camp Logo.png'
import { NavLink } from 'react-router-dom';
import '../App.css'
import '../pages/Css/LandingPage.css'
function Navbar() {

    const openNavbar = () => {
        const resNav = document.querySelector('.res-nav');
        if (resNav) {
            resNav.classList.add("open");
        }
    };
    const closeNavbar = () => {
        const resNav = document.querySelector('.res-nav');
        if (resNav) {
            resNav.classList.remove('open');
        }
    };
    return (
        <>
            <nav className='text-white flex items-center  px-2 w-full relative h-[100px] justify-between' id='navabar'>
                <div className='logo'>
                    <img src={logo} className='w-[35%]' alt='logo' />
                </div>
                <ul className='nav-list text-xl flex space-x-4'>
                    <NavLink to='/'><li id='nav-item' className='text-[17px]'>Home</li></NavLink>
                    <NavLink to="/aboutus"><li id='nav-item' className='text-[17px]'>About US</li></NavLink>
                    <NavLink to="/programs"><li id='nav-item' className='text-[17px]'>Programs</li></NavLink>
                    <NavLink to="/contactus"><li id='nav-item' className='text-[17px]'>Contact</li></NavLink>
                </ul>
                <div className='mr-8'>
                    <button id='nav-btn' className='px-2 py-1 text-[17px]'>Get started</button>
                </div>
                <div className='hamburger'>
                    <MenuIcon size={32} className='hamburger' onClick={openNavbar} />
                </div>

                <div className='res-nav'>
                    <div className='close mx-2 my-8' onClick={closeNavbar}><X /></div>
                    <div className='logo'>
                        <img src={logo} className='w-[75%]' alt='logo' />
                    </div>
                    <ul className='res-navlist text-xl'>
                        <NavLink to='/'><li id='nav-item' className='text-[17px]'>Home</li></NavLink>
                        <NavLink to="/aboutus"><li id='nav-item' className='text-[17px]'>About US</li></NavLink>
                        <NavLink to="/programs"><li id='nav-item' className='text-[17px]'>Programs</li></NavLink>
                        <NavLink to="/contactus"><li id='nav-item' className='text-[17px]'>Contact</li></NavLink>
                    </ul>
                    <div className='mr-8'>
                        <button id='nav-btn' className='px-2 py-1 text-[17px]'>Get started</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;