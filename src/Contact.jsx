export function Contact ({}) {
   return (
    <div className = "page">
            <div className = 'wrapper'>

                <div className = "left">
                    <div className = "link-wrapper">
                        <a href="home">HOME</a>
                    </div>

                    <div className = "link-wrapper">

                        <a href="contact">CONTACT</a>
                    </div>
                </div>
                <div className = "right">
                    <div className="my-name">
                        <div>Dylan Peppard</div>
                    </div>
                </div>
            </div>

            <div className = "contacts" style={{textAlign:"center"}}>
                <div>
                    <img src="src/public/email.png" alt="Email"/>
                    <div>
                        <div>Dpeppard@uci.edu</div>
                    </div>
                </div>

                <div>
                    <img src="src/public/cell.png" alt="Cellphone"/>
                    <div>
                        <div>858-380-6719</div>
                    </div>
                </div>

                <div>
                <a href="https://www.instagram.com/dylan_p_1998/"><img src="src/public/ig.png" alt="Instagram logo"/></a>
                </div>
            </div>
        </div>
   ) 
    }

export default Contact;