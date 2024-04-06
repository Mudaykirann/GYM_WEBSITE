import './css/gymamentites.css'
import img from '../assets/Images/Time to Actions - Gym (1).png'
import { ChevronRight } from 'lucide-react'
function GymAmentities() {
    return (
        <div className="gym-page">
            <div className='left'>
                <div className='left-img'>
                    <img src={img} className='w-[100%] rounded-lg' alt='time-to-action-image' /></div>
            </div>
            <div className='right shadow-lg'>
                <p className='mt-6 small'>A perfect gym</p>
                <h1 className='text-white  mb-3 text-7xl font-bold heading'>Gym Amentities</h1>
                <p className='text-white mb-3'>we pride ourselves on offering a comprehensive range of amenities designed to meet the diverse needs of our members.</p>
                <div className='amenities flex items-center gap-x-6'>
                    <ul className='first text-white pt-2'>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />24 Hours</li>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />Free Classes</li>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />Private Showers</li>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />24 Hours Security</li>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />HD TVs</li>
                    </ul>
                    <ul className='second text-white pt-2'>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />Classes</li>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />Health Plan Discounts</li>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />Wellness Programs</li>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />Private Restrooms</li>
                        <li className='flex items-center pb-1'><ChevronRight color='#ff1616' />Worldwide Club Access</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GymAmentities
