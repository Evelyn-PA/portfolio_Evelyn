import Img from "/Image/Line.png"
export default function Skills() {
    return (
        <pre className="container">
            <span className="keyword">function</span>{" "}
            <span className="identifier">skills</span>
            <span className="name">()</span>
            <span className="bracket">{" {"}</span>{"\n"}

            <div className="containerEdu">
                <div className='line'>
                    <img src={Img} alt="line" id="line" />
                </div>
                <div>
                    <div className='edu1'>
                        {"    "}
                        <span className="tech-stack">Front End:</span>{"\n"}
                        {"    "}
                        <span className="string">HTML, CSS, JavaScript (ES6+), React, Vite</span>{"\n"}
                    </div>
                    <div className='edu2'>
                        {"    "}
                        <span className="degree">Backend/ Tools:</span>{"\n"}
                        <span className="string">    Firebase, MongoDB, SQL, Git, Github, Netlify, Vercel{"\n"}</span>
                    </div>

                    <div className='edu3'>
                        {"    "}
                        <span className="degree">Design/Collaboration:</span>{"\n"}
                        <span className="string">    Figma, Canva, Vs Code{"\n"}</span>
                        {"    "}
                    </div>
                </div>
            </div>
        </pre>
    )
}