
function testimonialUser({ testimonial }) {
    return (
        <div className="single-testimonial ">
            <div className="top ">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className='text-white'>
                    <h1>{testimonial.name}</h1>
                    <p>{testimonial.stars}</p>
                </div>
            </div>
            <div className="content">
                <p>{testimonial.quote}</p>
            </div>
        </div>
    )
}

export default testimonialUser
