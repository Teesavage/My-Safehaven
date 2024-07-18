export default function Newsletter(){
    return(
        <>
        <div className="newsletterSection">
            <h1 className="head">Join Our NewsLetter</h1>
            <h4>Enter your Email to subscribe to our Newsletters and get daily news on mental health related topics.</h4>
            <p><input type="text" name="email" id="email" placeholder="Email address" />
            <button className="emailSubBtn" id="emailSubBtn">Subscribe</button></p>
            </div>
        </>
    )
}