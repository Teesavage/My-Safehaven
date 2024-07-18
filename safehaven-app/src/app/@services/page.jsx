import Image from "next/image"
export default function Services (){
    return(
        <>
        <div className="servicesSection">
            <h1 className="head">Our Services</h1>
            <h4>Discover a range of supportive services tailored to empower individuals facing
                mental health challenges, domestic violence, substance abuse and child abuse.
            </h4>
            
            <div className="services">
           <div className="servicesCard">
                <Image src="/Images/services.png" alt="servicesImg" className="servicesCardImage" width="336" height="200" />
                <h2 className='servicesCardTitle'>Real Time Chat</h2>
                <p className='servicesCardText'>Connect Instantly with trained counsellors who are here to always listen and support you.</p><br />
                <button className="servicesBtn">Sign Up</button>
            </div>
            <div className="servicesCard">
                <Image src="/Images/aboutus.png" alt="servicesImg" className="servicesCardImage" width="336" height="200" />
                <h2 className='servicesCardTitle'>Real Time Chat</h2>
                <p className='servicesCardText'>Connect Instantly with trained counsellors who are here to always listen and support you.</p><br />
                <button className="servicesBtn">Sign Up</button>
            </div>
            <div className="servicesCard">
                <Image src="/Images/aboutus.png" alt="servicesImg" className="servicesCardImage" width="336" height="200" />
                <h2 className='servicesCardTitle'>Real Time Chat</h2>
                <p className='servicesCardText'>Connect Instantly with trained counsellors who are here to always listen and support you.</p><br />
                <button className="servicesBtn">Sign Up</button>
            </div>
            <div className="servicesCard">
                <Image src="/Images/aboutus.png" alt="servicesImg" className="servicesCardImage" width="336" height="200" />
                <h2 className='servicesCardTitle'>Real Time Chat</h2>
                <p className='servicesCardText'>Connect Instantly with trained counsellors who are here to always listen and support you.</p><br />
                <button className="servicesBtn">Sign Up</button>
            </div>
            </div>
            </div>
        </>
    )
}