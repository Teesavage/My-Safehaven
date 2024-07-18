import Image from "next/image";

export default function About() {
    return(
        <>
        <div className="section">
         <div className="aboutSection">
            <h1 className="head">About Us</h1>
            <h4>Building a Healthier Safer Community Together</h4>
            <h5>At SafeHaven, we are dedicated to providing confidential, 
                24/7 support for individuals facing mental health challenges, 
                domestic violence, drug abuse, and child abuse. Our mission 
                is to create  a safe and supportive environment where you can 
                access the help you need anytime, anywhere.  Founded by a team 
                passionate about mental health and Public safety, we offer a range 
                of services designed to empower and support you on your journey to  
                well-being. Join us in building a healthier,  safer community.
                </h5>

                <Image src="/Images/aboutus.png" alt="AboutUs" className="aboutUs" width="1500" height="1500" />
                <button className="aboutBtn">Learn More</button><button className="aboutBtn">Sign Up</button>

         </div>
         </div>
        </>
    )
}