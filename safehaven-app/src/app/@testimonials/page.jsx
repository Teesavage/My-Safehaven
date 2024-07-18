import Image from "next/image"
export default function Testimonials() {
    return(
        <>
        <div className="servicesSection">
            <div className="testimonialSection">
            <h1 className="head">Testimonials</h1>
            <h4>What our users say</h4>
            <div className="services">
           <div className="testimonialCard">
                <Image src="/Images/services.png" alt="servicesImg" className="testimonialCardImage" width="336" height="200" />
                <h5 className='testimonialCardText'>"SafeHaven has been a lifeline for me during my toughest times.
                                                    The support i recieved was invaluable."
                                                    <p>John Doe <span>Lagos, Nigeria</span></p></h5>
            </div>
            <div className="testimonialCard">
                <Image src="/Images/aboutus.png" alt="servicesImg" className="testimonialCardImage" width="336" height="200" />
                <h5 className='testimonialCardText'>"SafeHaven has been a lifeline for me during my toughest times.
                                                    The support i recieved was invaluable."
                                                    <p>John Doe <span>Lagos, Nigeria</span></p></h5>
            </div>
            <div className="testimonialCard">
                <Image src="/Images/aboutus.png" alt="servicesImg" className="testimonialCardImage" width="336" height="200" />
                <h5 className='testimonialCardText'>"SafeHaven has been a lifeline for me during my toughest times.
                                                    The support i recieved was invaluable."
                                                    <p>John Doe <span>Lagos, Nigeria</span></p></h5>
            </div>
            <div className="testimonialCard">
                <Image src="/Images/aboutus.png" alt="servicesImg" className="testimonialCardImage" width="336" height="200" />
                <h5 className='testimonialCardText'>"SafeHaven has been a lifeline for me during my toughest times.
                                                    The support i recieved was invaluable."
                                                    <p>John Doe <span>Lagos, Nigeria</span></p></h5>
            </div>
            </div>
          </div>
         </div>
        </>
    )
}