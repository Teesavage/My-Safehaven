import Link from "next/link"
export default function Footer() {
    return(
        <footer className="footer">

 
    <div className="footer-content">  
     <div className="footer-content-column">  
      <div className="footer-logo">  
       <Link href="/">  
        <img src="" alt="Logo" /> 
       </Link>  
      </div>
     </div>  
     <div className="footer-content-column">  
      <div className="footer-menu">  
       <h2 className="footer-menu-name">QUICK MENU</h2>  
       <ul className="footer-menu-list">  
        <li>  
        <Link href="#">Home</Link>  
        </li>  
        <li>  
        <Link href="#">About Us</Link>  
        </li>  
        <li>  
        <Link href="#">Services</Link>  
        </li>  
        <li>  
        <Link href="#">Resources</Link>  
        </li>  
        <li>  
        <Link href="#">Community</Link>  
        </li>  
          
       </ul>  
      </div>  
      <div className="footer-content-column">
      <div className="footer-menu">  
       <h2 className="footer-menu-name">Contact</h2>  
       <ul className="footer-menu-list">  
            <li>  
                0022222222  
            </li>  
            <li>  
                safehaven@gmail.com  
            </li>  
            <li>  
                Africa 
            </li>  
       </ul>  
      </div>  
     </div>  
     </div>
     <div className="footer-content-column">  
      <div className="footer-menu">  
       <h2 className="footer-menu-name">Legal</h2>  
       <ul className="footer-menu-list">  
        <li> 
         <Link href="#">Privacy Policy</Link>  
        </li>  
        <li> 
         <Link href="#">Terms of Use</Link>  
        </li>  
       
       </ul>  
      </div>  
     </div>  

 
    

    </div>
    <hr className="footer-hr" />  
    <div className="footer-copyright">  
     <div className="footer-copyright-wrapper"> 
     <div className="social-icons">


    <Link href="" target="_blank">
        <img src="" alt="Facebook" />
    </Link>

    <Link href="" target="_blank">
        <img src="" alt="Twitter" />
    </Link>

    <Link href="" target="_blank">
        <img src="" alt="Instagram" />
    </Link>

    <Link href="" target="_blank">
        <img src="" alt="Linkedin" />
    </Link>

    <Link href="" target="_blank">
        <img src="" alt="Gmail" />
    </Link>
</div>

      <p className="footer-copyright-text">  
        <br />
        ©2024. | SAFEHAVEN | All rights reserved. 
      </p>  
     </div>  
    </div>  
  
    


        </footer>
    )
}