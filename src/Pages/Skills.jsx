import Img from "/Image/Line.png"
export default function Skills() {
    return (
        <pre className="container">
            <span className="keyword">function</span>{" "}
            <span className="identifier">skills</span>
            <span className="name">()</span>
            <span className="bracket">{" {"}</span>{"\n"}

            <div className="containerSkills">
                <div className='line'>
                    <img src={Img} alt="line" id="line" />
                </div>
                <div>
                    <div className='skill1'>
                        {"    "}
                        <span className="tech-stack">Front End:</span>{"\n"}
                        {"    "}
                        <span className="string">HTML, CSS, JavaScript (ES6+), React, Vite</span>{"\n"}
                    </div>
                    <div className='skill2'>
                        {"    "}
                        <span className="tech-stack">Backend/ Tools:</span>{"\n"}
                        <span className="string">    Firebase, MongoDB, SQL, Git, Github, Netlify, Vercel{"\n"}</span>
                    </div>

                    <div className='skill3'>
                        {"    "}
                        <span className="tech-stack">Design/Collaboration:</span>{"\n"}
                        <span className="string">    Figma, Canva, Vs Code{"\n"}</span>
                    </div>
                </div>
            </div>
            <span className="bracket-left2">{"}"}</span>
        </pre>
    )
}