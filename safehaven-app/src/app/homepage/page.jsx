import Image from "next/image";
import Link from "next/link";
import Notifications from "../@notifications/page";
import Featured from "../@featured/page";


export default function Homepage() {
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
            
            <Link href=""><Image src="/images/hero-image1.png" alt="HeroImage" className="heroimage" style={heroImage} width="1500" height="1500" priority={true} /></Link>
            <div style={heroText}>
            <h1 className="heroHead1">Your Safe<span>Haven</span> for Mental Support</h1>
            <p className="heroText1">Get help and resources for mental health issues, domestic violence and more
            </p>
            <Link href="/"><button className="heroBtn">Log Out</button></Link>
           </div> 
            
         </div>

         <div className="servicesSection">
            <h3>Welcome John Doe!</h3><br />
            <div className="homepageBtns">
            <button className="homepageBtn">Start A Chat</button>
            <button className="homepageBtn">Join A Forum</button>
            <button className="homepageBtn">Book A Therapy Session</button>
            <button className="homepageBtn">Explore Resources</button>
            </div>
         </div>

         <Notifications />
         <Featured />



         
        </>
    )
}