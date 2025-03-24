import { Link } from 'react-router-dom'

export function Work ({}) {
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



            <div className="uscg-title">
                <h1 style={{textAlign:"center"}}><strong>U.S. Coast Guard</strong></h1>
            </div>
            <img src="me_rimpac2.jpg" className='uscg-img' alt="Website owner in military gear"></img>
            <div className="job-description">
                <div>I kick doors one weekend a month. Maritime Law Enforcement Specialist with regards to defending
                    ports and high value assets. Demonstrated Entry Control Points, Point Defense, and Force Protection
                    to allied admirals during RIMPAC 2024. And I hold a security clearance ✅
                </div>
            </div>

            <div className="mngo-title">
                <h1 style={{textAlign:"center"}}><strong>MNGO Café</strong></h1>
            </div>
            <div className="job-description">
                <div>I made Thai desserts and quickly worked my way up to supervisor in a couple of months. Went on to
                    train staff and supervise the cafe throughout COVID. After 1.5 years, I had to move for school. I loved this job.
                </div>
            </div>

        </div>
        </>
    )
}

export default Work;