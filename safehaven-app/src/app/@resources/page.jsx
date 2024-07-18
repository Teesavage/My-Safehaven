import Image from "next/image"

export default function Resources(){
    return(
        <>
        
        <div className="servicesSection">
            <h1 className="head">Resources</h1>
            <h4>Welcome to our resources section, where you can access a wealth of information
                and support materials designed to assist individuals and families dealing with
                mental health challenges, abuse and related issues.
            </h4>
            
            <div className="services">
           <div className="resourcesCard">
                <Image src="/Images/resources1.png" alt="servicesImg" className="servicesCardImage" width="336" height="200" />
                <h2 className='resourcesCardTitle'>Substance Abuse Resources</h2>
                <div className='resourcesCardText'><ul>
                    <li>Substance Abuse and Mental Health Services</li>
                    <li>Alcoholics Anonymous(AA): Support Groups</li>
                    </ul></div><br />
                <button className="resourcesBtn">Learn More</button>
            </div>
            <div className="resourcesCard">
                <Image src="/Images/resources2.png" alt="servicesImg" className="servicesCardImage" width="336" height="200" />
                <h2 className='resourcesCardTitle'>Child Abuse Prevention Resources</h2>
                <div className='resourcesCardText'><ul>
                    <li>Child Abuse and Mental Health Services</li>
                    <li>Alcoholics Anonymous(AA): Support Groups</li>
                    </ul></div><br />
                    <button className="resourcesBtn">Learn More</button>
            </div>
            <div className="resourcesCard">
                <Image src="/Images/aboutus.png" alt="servicesImg" className="servicesCardImage" width="336" height="200" />
                <h2 className='resourcesCardTitle'>Real Time Chat</h2>
                <div className='resourcesCardText'><ul>
                    <li>Substance Abuse and Mental Health Services</li>
                    <li>Alcoholics Anonymous(AA): Support Groups</li>
                    </ul></div><br />
                    <button className="resourcesBtn">Learn More</button>
            </div>
        <div className="resourcesCard">
                <Image src="/Images/aboutus.png" alt="servicesImg" className="servicesCardImage" width="336" height="200" />
                <h2 className='resourcesCardTitle'>Real Time Chat</h2>
                <div className='resourcesCardText'><ul>
                    <li>Substance Abuse and Mental Health Services</li>
                    <li>Alcoholics Anonymous(AA): Support Groups</li>
                    </ul></div><br />
                    <button className="resourcesBtn">Learn More</button>
            </div>
            </div>
            </div>
            
            </>
    )
}