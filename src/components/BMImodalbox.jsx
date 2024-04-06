import '../components/css/BMImodalbox.css'
function BMImodalbox({ closeModal, res }) {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <h2 className='text-xl font-semibold text-gray-800'>Your BMI</h2>
                <p className='mt-4 text-gray-600'>{res}</p>
            </div>
        </div>
    )
}

export default BMImodalbox
