import { Link } from 'react-router-dom'

export function Education ({}) {
    return (
            <>
            <div className = "page">
                <div className = "wrapper">
                    <div className = "left">
                        <div className = "link-wrapper">
                            <Link to='/home'>HOME</Link>
                        </div>
                        <div className = "link-wrapper">
                            <Link to='/contact'>CONTACT</Link>
                        </div>
                    </div>
                    <div className = "right">
                        <div className="my-name">
                            <div>Dylan Peppard</div>
                        </div>
                    </div>
                </div>
        
                <div className = "text">
                    <div className = "college-education">
                        <u><strong>COLLEGE EDUCATION</strong></u>
                    </div>
                    <div className = "degree-type">
                        <strong>Software Engineering B.S.</strong>
                    </div>
                    <div className = "college-name">
                        University of California, Irvine
                    </div>
                    <div className = "college-details">
                        <em>09/2022 - 06/2025</em>
                        <em><br />GPA: 3.80</em>
                        <em><br />Featured Coursework</em>
                    </div>
                    <div className = "course-grid">
                        <ul>
                            <li>Senior Capstone I/II (Virtual Reality)</li>
                            <li>Software Design I</li>
                            <li>Formal Language & Automata Theory</li>
                            <li>Intermediate Programming (Python)</li>
                            <li>Python with libraries</li>
                            <li>Computer Networks</li>
                            <li>Human Computer Interaction</li>
                            <li>Stats for CS</li>
                        </ul>
                        <ul>
                            <li>Intro to Artificial Intelligence</li>
                            <li>Data Structures in C++</li>
                            <li>Concepts of Programming Languages I</li>
                            <li>Projects in Algorithms & Data Structures</li>
                            <li>Software Design: Stuctures & Implementation (Pattens)</li>
                            <li>Compilers & Interpreters</li>
                            <li>Boolean Algebra & Logic</li>
                            <li>Writing for IT</li>
                        </ul>
                        <ul>
                            <li>Information Retrieval</li>
                            <li>Internet Applications Engineering</li>
                            <li>Learning Assistant Mentoring</li>
                            <li>Software Testing / QA</li>
                            <li>Principles of Operating System</li>
                            <li>User Interaction Software</li>
                            <li>Intro to SWE</li>
                        </ul>
                        <ul>
                            <li>Security & Privacy</li>
                            <li>Java</li>
                            <li>Learning Assistant Pedagogy</li>
                            <li>Algorithms</li>
                            <li>Embedded Systems</li>
                            <li>Intro to Data Management (SQL)</li>
                            <li>Project Management</li>
                        </ul>
                    </div>
                    <img src= "donald-bren-hall.jpg" className = "college-images" alt="Donald Bren Hall building"/>
                    <img src = "uci.png" className = "college-images" alt="UCI logo"/>
        
                    <div className = "degree-type">
                        <strong>Transfer Courses</strong>
                    </div>
                    <div className = "college-name">
                        San Diego Community College District
                    </div>
                    <div className = "college-details">
                        <em>06/2016 - 05/2022</em>
                        <em><br />GPA: 3.86</em>
                        <em><br />Featured Coursework</em>
                    </div>
                    <div className = "course-grid">
                        <ul>
                            <li>Python</li>
                            <li>Dreamweaver</li>
                        </ul>
                        <ul>
                            <li>Calculus II</li>
                            <li>Discrete Math</li>
                        </ul>
                        <ul>
                            <li>C/C++ and C/C++ Data Structures</li>
                            <li>Assembly and Computer Organization</li>
                        </ul>
                        <ul>
                            <li>Java</li>
                            <li>Linear Algebra</li>
                        </ul>
                    </div>
                    <img src= "citycollege.jpg" className = "college-images" alt="San Diego City College"/>
                    <img src = "sdccd.png" className = "college-images" alt="SDCCD Logo"/>
        
                    <div className = "degree-type">
                        <strong>Television, Film, and New Media B.S.</strong>
                    </div>
                    <div className = "college-name">
                        San Diego State University
                    </div>
                    <div className = "college-details">
                        <em>08/2018 - 12/2020</em>
                        <em><br />GPA: 3.60</em>
                        <em><br />Featured Coursework</em>
                    </div>
                    <div className = "course-grid">
                        <ul>
                            <li>Art Direction</li>
                            <li>Vectorworks</li>
                        </ul>
                        <ul>
                            <li>Many Media Critcism Courses</li>
                            <li>Photography</li>
                        </ul>
                        <ul>
                            <li>Set Design</li>
                            <li>Sound Design</li>
                        </ul>
                        <ul>
                            <li>Video Editing</li>
                            <li>Japanese I and II</li>
                        </ul>
                    </div>
                    <img src= "sdsucampus.jpg" className = "college-images" alt="SDSU building"/>
                    <img src = "sdsu.png" className = "college-images" alt="SDSU campus"/>
                </div>
            </div>
            </>
    )
}

export default Education;