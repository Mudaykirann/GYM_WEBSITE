import { useState } from 'react';
import '../components/css/BMICalc.css';
import BMImodalbox from './BMImodalbox';

function BMICalc() {
    const [weight, setWeight] = useState('');
    const [heightMt, setHeightMt] = useState('');
    const [bmi, setBMI] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const calculateBMI = (e) => {
        e.preventDefault();
        const totalHeightInMts = parseInt(heightMt) * parseInt(heightMt);
        const weightInKgs = parseInt(weight);

        if (totalHeightInMts > 0 && weightInKgs > 0) {
            let bmiValue = (weightInKgs / totalHeightInMts);
            setBMI(bmiValue.toFixed(2));
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='bmi-page'>
            <div className='left-container'>
                <h1 className='text-4xl pb-2 font-bold text-white'>Calculate Your BMI</h1>
                <p className='text-white'>Welcome to our gym & fitness training center. <br /> sore today, strong tomorrow. Improve your Fitness Today.</p>
                <form onSubmit={calculateBMI}>
                    <div className='one mt-4'>
                        <label className='text-white text-xl mb-1'>HEIGHT</label>
                        <div className='inputs w-[400px] flex gap-x-4'>
                            <input type='tel' placeholder='meters' value={heightMt} onChange={(e) => setHeightMt(e.target.value)} className=' text-white bg-transparent border w-[50%] p-1' />
                        </div>
                    </div>
                    <div className='two mt-4'>
                        <label className='text-white text-xl mb-1'>WEIGHT</label>
                        <br />
                        <input type='tel' placeholder='KGS' value={weight} onChange={(e) => setWeight(e.target.value)} className=' text-white bg-transparent border p-1 w-[400px]' />
                    </div>
                    <button type='submit' className='bg-[#ff1616] p-2 mt-4 text-white shadow-md rounded-sm'>Calculate</button>
                </form>
            </div>
            {isModalOpen && (
                <BMImodalbox closeModal={closeModal} res={bmi} />
            )}
        </div>
    );
}

export default BMICalc;
