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
            <div className="job-description">
                <div>Reservist in the U.S. Coast Guard. Specialize in federal maritime law enforcement
                    with regards to defending domestic and international ports. I posess a secret security clearance.
                    Demonstrated unit capabilities to allied admirals during RIMPAC 2024. 
                </div>
            <div>I joined in support of the Coast Guard's 11 missions and to fight the fentanyl crisis.
                I also wanted to gain general life skills, such as CPR, firefighting, marksmanship, law
                enforcement knowledge, and to gain first-hand experience and insight into how the military 
                operates internally.
            </div>
            </div>

            <div className="mngo-title">
                <h1 style={{textAlign:"center"}}><strong>MNGO Café</strong></h1>
            </div>
            <div className="job-description">
                <div>My previous job was with MNGO Café in San Diego, where I quickly
                worked my way up to becoming a supervisor who could quickly make Thai desserts and
                train other staff. Not only did I hone my management skills and those specific to the 
                job, but I notably developed interpersonal skills by working behind a counter with friends
                for thirty hour weeks. The income that I earned here helped me get into real estate, 
                liberating me to buy a rental house up in Montana and completing the homebuying process
                remotely while simultaneously finding a property manager to help me find and vet tenants.
                Although I loved this job, I had to hang up the apron after one-and-a-half years and move
                    to Irvine for school.</div>
            </div>

        </div>
        </>
    )
}

export default Work;