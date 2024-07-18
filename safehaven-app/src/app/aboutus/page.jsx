import Image from "next/image"
import Resources from "../@resources/page"
import Testimonials from "../@testimonials/page"

export default function AboutUs(){
    return(
        <>
        <div className="aboutusSection">
        <h1 className="head">About SafeHaven</h1>
        <h4>Learn more about our mission, values and the people behind SafeHaven.</h4>
        <Image src="/images/aboutvector.png" className="aboutusImage" alt="vector" width="500" height="500"/>
        <div className="aboutusMission"><p><span>Our Mission<br /></span>
        At SafeHaven, our mission is to  provide a safe and supportive environment for
        individuals facing mental health issues,  depression, domestic violence, drug
        abuse, and other public safety concerns. We aim to offer comprehensive resources
        and immediate support to help our users lead happier and healthier lives.</p>
        <p><span>Our Vision<br /></span>     
        We envision a world where everyone has access to the support they need to
        lead a healthy, safe, and fulfilling life.
        </p>
        </div>

        </div>
        <div className="aboutusSection">
        <h1 className="head">Our Values</h1>
        <div className="valuesCards">
        <div className="valuesCard">
                <h3 className='valuesCardTitle'>Compassion</h3>
                <p className='valuesCardText'>We approach every interaction with empathy and understanding.</p>

            </div>
            <div className="valuesCard">
                <h3 className='valuesCardTitle'>Privacy</h3>
                <p className='valuesCardText'>We proiritize user privacy and data security in all our services.</p>

            </div>
            <div className="valuesCard">
                <h3 className='valuesCardTitle'>Accessibility</h3>
                <p className='valuesCardText'>We strive to make our resources and support available to everyone.</p>

            </div>
            <div className="valuesCard">
                <h3 className='valuesCardTitle'>Community</h3>
                <p className='valuesCardText'>We believe in the power of community and peer support.</p>

            </div>
            </div>

        </div>
        <div className="aboutusSection">
            <h1 className="head">Meet Our Team</h1>

            <div className="teamCards">

            <div className="teamCard">
                <Image className='teamCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                
                <p className='teamCardText'><span>Name</span>: John Doe</p>
                <p className='teamCardText'><span>Role</span>: Founder & CEO</p>
                <p className='teamCardText'><span>Description</span>: John has over 20 years of experience in mental health advocacy and support.</p>
                
            </div>
            <div className="teamCard">
                <Image className='teamCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                
                <p className='teamCardText'><span>Name</span>: John Doe</p>
                <p className='teamCardText'><span>Role</span>: Founder & CEO</p>
                <p className='teamCardText'><span>Description</span>: John has over 20 years of experience in mental health advocacy and support.</p>
                
            </div>
            <div className="teamCard">
                <Image className='teamCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                
                <p className='teamCardText'><span>Name</span>: John Doe</p>
                <p className='teamCardText'><span>Role</span>: Founder & CEO</p>
                <p className='teamCardText'><span>Description</span>: John has over 20 years of experience in mental health advocacy and support.</p>
                
            </div>
            <div className="teamCard">
                <Image className='teamCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                
                <p className='teamCardText'><span>Name</span>: John Doe</p>
                <p className='teamCardText'><span>Role</span>: Founder & CEO</p>
                <p className='teamCardText'><span>Description</span>: John has over 20 years of experience in mental health advocacy and support.</p>
                
            </div>
            
            </div>

        </div>

        <div className="milestones">
        <p>Years<span>1 Year(s)</span></p>
        <p>Community <span>10+</span></p>
        <p>Users <span>20K+</span></p>
        <p>Projects Done <span>5+</span></p>
        </div>
        <Resources />
        <Testimonials />
        </>
    )
}