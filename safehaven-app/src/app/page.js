import Image from "next/image";
import Link from "next/link";
import Resources from "./@resources/page";
import Newsletter from "./@newsletter/page";
import Faq from "./@faq/page";
import About from "./@about/page";
import Services from "./@services/page";
import Testimonials from "./@testimonials/page";

export default function Root() {
    const heroImage = {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        width: "100%",
        height: "auto",
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
            <h1 className="heroHead">Your Safe <span className="heroHead-span">Space</span> for Mental Health and Support</h1>
            <p className="heroText">SafeHaven offers a secure, confidential platform for those facing
                domestic violence, substance abuse, mental health issues and child abuse.
                Find help, resources and professional support for a safer, healthier future.
            </p>
            <button className="heroBtn">Sign In</button><button className="heroBtn">Sign Up</button>
           </div> 
            
         </div>
         <About />
         <Services />
         <Testimonials />
         <Resources />
         <Newsletter />
         <Faq />

         </>
    )
}
