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
                    <img src="email.png" alt="Email"/>
                    <div>
                        <div>Dpeppard@uci.edu</div>
                    </div>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/dylan-peppard-896713132/" target="_blank"><img src="LinkedIn.png" alt="LinkedIn logo"/></a>
                </div>

                <div>
                <a href="https://github.com/DylanPeppard" target="_blank"><img src="github.png" alt="GitHub logo"/></a>
                </div>
            </div>
        </div>
   ) 
    }

export default Contact;