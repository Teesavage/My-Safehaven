import Image from "next/image";
import Link from "next/link";

export default function Community() {
    const heroImage = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        width: "100%",
        height: "500px",
        position: "relative",
        
    }
    const heroText = {
        textAlign: "left",
        position: "absolute",
        top: "50%",
        left: "40%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        
    }
    return(
        <>
        <div>
            
            <Image src="/images/hero-image1.png" alt="HeroImage" className="heroimage" style={heroImage} width="1500" height="1500" priority={true} />
            <div style={heroText}>
            <h1 className="heroHead1">Join Our Community</h1>
            <p className="heroText1">Connect with others, share your journey, and find support.
            </p>
           </div> 
            
         </div>
         <div className="section">
         <div className="aboutSection">
            <h1 className="head">Community Guidelines</h1>
            <h4>Brief description of guidelines to ensure a safer
                and respectful environment. <br /><br />
                <button className="heroBtn">Read Full Guidelines</button>
            </h4>
        </div>
        
        <div className="servicesSection">
            <h3>Discussion Forums</h3>

            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Mental Health Support</h5>
                <p className='discussionCardText'>Share your experience and get advice on mental health issues.</p>
                <button className="discussionCardBtn">Join Discussion</button>

            </div>
            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Mental Health Support</h5>
                <p className='discussionCardText'>Share your experience and get advice on mental health issues.</p>
                <button className="discussionCardBtn">Join Discussion</button>

            </div>
            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Mental Health Support</h5>
                <p className='discussionCardText'>Share your experience and get advice on mental health issues.</p>
                <button className="discussionCardBtn">Join Discussion</button>

            </div>
            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Mental Health Support</h5>
                <p className='discussionCardText'>Share your experience and get advice on mental health issues.</p>
                <button className="discussionCardBtn">Join Discussion</button>

            </div>
            </div>


        <div className="servicesSection">
            <h3>Support Groups</h3>

            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Anxiety and Depression</h5>
                <button className="discussionCardBtn">Join Group</button>

            </div>
            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Addiction Recovery</h5>
                <button className="discussionCardBtn">Join Group</button>

            </div>
            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Save the Children</h5>
                <button className="discussionCardBtn">Join Group</button>

            </div>
            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Say NO To Abuse</h5>
                <button className="discussionCardBtn">Join Group</button>

            </div>
            </div>

            
        <div className="servicesSection">
            <h3>Upcoming Events</h3>

            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Monthly Mental Health Webinar</h5>
                <p className='discussionCardText'><span><p>Date & Time:</p> July 25th, 2024, 7:00PM.</span></p>
                <p className='discussionCardText'><span><p>Description:</p> Join our expert-led webinar on mental health topics.</span></p>
                <button className="discussionCardBtn">Register Now</button>

            </div>
            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Monthly Mental Health Webinar</h5>
                <p className='discussionCardText'><span><p>Date & Time:</p> July 25th, 2024, 7:00PM.</span></p>
                <p className='discussionCardText'><span><p>Description:</p> Join our expert-led webinar on mental health topics.</span></p>
                <button className="discussionCardBtn">Register Now</button>
            </div>
            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Monthly Mental Health Webinar</h5>
                <p className='discussionCardText'><span><p>Date & Time:</p> July 25th, 2024, 7:00PM.</span></p>
                <p className='discussionCardText'><span><p>Description:</p> Join our expert-led webinar on mental health topics.</span></p>
                <button className="discussionCardBtn">Register Now</button>
            </div>
            <div className="discussionCard">
                <h5 className='discussionCardTitle'>Monthly Mental Health Webinar</h5>
                <p className='discussionCardText'><span><p>Date & Time:</p> July 25th, 2024, 7:00PM.</span></p>
                <p className='discussionCardText'><span><p>Description:</p> Join our expert-led webinar on mental health topics.</span></p>
                <button className="discussionCardBtn">Register Now</button>
            </div>
            </div>


        </div>
        </>
    )
}