import Image from "next/image"

export default function Featured (){
    return(
        <>
                 <div className="servicesSection">
            <h3>Featured Content</h3>

            <div className="featuredCard">
                <Image className='featuredCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                <h3 className='featuredCardTitle'>Coping with anxiety during uncertain times.</h3>
                <p className='featuredCardText'>Learn strategies to manage anxiety..</p>
                <button className="featuredCardBtn">Read More</button>

            </div>
            <div className="featuredCard">
                <Image className='featuredCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                <h3 className='featuredCardTitle'>Supporting a friend facing Domestic Violence</h3>
                <p className='featuredCardText'>Find out how you can provide support...</p>
                <button className="featuredCardBtn">Read More</button>

            </div>
            <div className="featuredCard">
                <Image className='featuredCardImage' src="/images/profilepic.png" alt="profilepic" width="200" height="200" />
                <h3 className='featuredCardTitle'>Overcoming Addiction: Real Stories</h3>
                <p className='featuredCardText'>Hear inspiring stories from people...</p>
                <button className="featuredCardBtn">Read More</button>

            </div>
            <h4><button className="featuredCardBtn">View More</button></h4>

         </div>
        </>
    )
}