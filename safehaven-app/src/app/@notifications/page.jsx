import Image from "next/image"


export default function Notifications() {
    return(
        <>
        <div className="servicesSection">
            <h3>Notification(s)</h3>

            <div className="notificationCard">
                <Image className='notificationCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                <h3 className='notificationCardTitle'>You have 3 new messages</h3>
                <p className='notificationCardText'>10 minutes ago</p>
                <button className="notificationCardBtn">View Messages</button>

            </div>
            <div className="notificationCard">
                <Image className='notificationCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                <h3 className='notificationCardTitle'>Upcoming Therapy Session at 3pm</h3>
                <p className='notificationCardText'>Scheduled for today</p>
                <button className="notificationCardBtn">View Session Details</button>

            </div>
            <div className="notificationCard">
                <Image className='notificationCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                <h3 className='notificationCardTitle'>New reply to your forum post</h3>
                <p className='notificationCardText'>1 hour ago</p>
                <button className="notificationCardBtn">View Comments</button>

            </div>
            <h4><button className="notificationCardBtn">View More</button></h4>



         </div>

        </>
    )
}