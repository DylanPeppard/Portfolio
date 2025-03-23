export function Home ({}) {
    return (
        <>
        <div className = "page">
            <div className = "wrapper">
                <div className = "left">
                    <div className = "link-wrapper">
                        <Link to="/">HOME</Link>
                    </div>

                    <div className = "link-wrapper">
                        <Link to='/contact'>CONTACT</Link>
                    </div>
                </div>
                <div className = "my-name">
                    Dylan Peppard
                </div>
            </div>
            
            <div className="portfolio-items-wrapper">

                <div className="portfolio-item-wrapper">
                    <Link to="/education"><img className="portfolio-item-bg" src="uci.jpg" alt="UC Irvine sign"/></Link>
                    <div className="img-txt-wrapper">
                        <div className="subtitle">
                            <Link to="/education">Education</Link>
                        </div>
                    </div>

                </div>

                <div className="portfolio-item-wrapper">
                        <Link to="/about"><img src="headshot-1.jpg" className="portfolio-item-bg" alt="Dylan Peppard"/></Link>
                    <div className="img-txt-wrapper">
                        <div className="subtitle">
                            <Link to="/about">About me</Link>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item-wrapper">
                    <Link to="/work"><img src="uscg.jpg" className="portfolio-item-bg" alt="U.S. Coast Guard logo"/></Link>
                    <div className="img-txt-wrapper">
                        <div className="subtitle">
                            <Link to="/work">Work</Link>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item-wrapper">
                    <Link to="/projects"><img src="psycheMenu.png" className="portfolio-item-bg" alt="Python shell program"/></Link>
                    <div className="img-txt-wrapper">
                        <div className="subtitle">
                            <Link to="/projects">Projects</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Home;