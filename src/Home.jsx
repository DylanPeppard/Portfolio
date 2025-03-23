export function Home ({}) {
    return (
        <>
        <div className = "page">
            <div className = "wrapper">
                <div className = "left">
                    <div className = "link-wrapper">
                        <a href="home">HOME</a>
                    </div>

                    <div className = "link-wrapper">
                        <a href="contact">CONTACT</a>
                    </div>
                </div>
                <div className = "my-name">
                    Dylan Peppard
                </div>
            </div>
            <div className="content-wrapper">
                <div className="portfolio-items-wrapper">

                    <div className="portfolio-item-wrapper">
                        <a href="education"><img className="portfolio-item1-bg" src="src/public/uci.jpg" alt="UC Irvine sign"/></a>
                        <div className="img-txt-wrapper">
                            <div className="subtitle">
                                <a href="education">Education</a>
                            </div>
                        </div>

                    </div>

                    <div className="portfolio-item-wrapper">
                        <a href="about"><img src="src/public/headshot-1.jpg" className="portfolio-item-bg" alt="Dylan Peppard"/></a>
                        <div className="img-txt-wrapper">
                            <div className="subtitle">
                                <a href="about">About me</a>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item-wrapper">
                        <a href="work"><img src="src/public/uscg.jpg" className="portfolio-item1-bg" alt="U.S. Coast Guard logo"/></a>
                        <div className="img-txt-wrapper">
                            <div className="subtitle">
                                <a href="work">Work</a>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-item-wrapper">
                        <a href="projects"><img src="src/public/psycheMenu.png" className="portfolio-item-bg" alt="Python shell program"/></a>
                        <div className="img-txt-wrapper">
                            <div className="subtitle">
                                <a href="projects">Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Home;