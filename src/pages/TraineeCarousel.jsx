import Carousel from "../components/Carousel"
import trainee1 from '../assets/Images/Personal Fitness Trainer Instagram Post.png'
import trainee2 from '../assets/Images/White Modern Fithess Club.png'
import trainee3 from '../assets/Images/john.png';
import trainee4 from '../assets/Images/Green and Black Fitness Gym Instagram Post.png';
//import { ArrowRight, ArrowLeft } from "lucide-react"
//import '../pages/Css/Carousel.css'
function TraineeCarousel() {

    const images = [trainee1, trainee2, trainee3, trainee4]
    return (
        <div className="heading w-full px-[45px] py-[40px] bg-black">
            <h1 className="text-white font-bold text-4xl text-center mt-2 mb-4">Our Trainers</h1>
            <p className="text-white text-center w-[550px] mx-auto">Our gym trainers are fitness professionals who guide individuals in achieving their fitness goals through personalized workout plans and expert advice.</p>
            <main className="w-[100%] pt-8">
                <Carousel images={images} />
            </main>
        </div>
    )
}

export default TraineeCarousel
