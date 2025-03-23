export function About ({}) {
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

            <div className="headshot2">
                <img src="me2.jpg" className="center" alt="Dylan Peppard in front of Chicago's 'The Bean'"/>
            </div>
            <div className = "biography">
                <div>Hi! I'm 26 years old and from San Diego, CA. I'm graduating with my second B.S. in Software Engineering
                    and previously earned my B.S. in Television, Film, and New Media at San Diego State University. Please reach
                    out if you need a software engineer for a job, internship, passion project, research project, or just to chat with!<br /></div> Professionally, I've worked in many different industries. I'm currently a reservist in the U.S. Coast Guard, specializing in
                    maritime law enforcement. I also have a couple of years of experience in managing cafes and landlording. Going forward, however,
                    I will only be looking at tech.
                <div>On my free time, if I'm not still studying or working, I like to go to the gym, hike, watch YouTube videos, 
                    and browse the web. I also used to be a semi-competitive gamer, playing varsity League of Legends for SDSU against other universities. 
                </div>
            </div>
        </div>
        </>
    )
}

export default About;