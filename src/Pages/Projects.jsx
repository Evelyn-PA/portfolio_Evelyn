import '../App.css'
import Img from "/Image/Line.png"
export default function Project() {
    return (
        <pre className="container">
            <span className="keyword">function</span>{" "}
            <span className="identifier">projects</span>
            <span className="name">()</span>
            <span className="bracket">{" {"}</span>{"\n"}

            <div className="containerEdu">
                <div className='line'>
                    <img src={Img} alt="line" id="line" />
                </div>
                <div>
                    <div className='edu1'>
                        {"    "}
                        <span className="title">Assembly: Endgame!</span> {"\n"}
                        {"    "}
                        <span className="tech-stack">React, JavaScript (ES6), HTML, CSS</span>{"\n"}
                        {"    "}
                        <span className="string">a React-based word-guessing game that showcases {"\n"}    my skills in state management, component design, {"\n"}    and front-end development using React, JavaScript, HTML, and CSS.
                        </span>{"\n"}
                        {"    "}
                        <span className="github-link">Link <a href="https://github.com/Evelyn-PA/assembly-endgame" target="_blank" id="github-prj">Github</a></span>{"\n"}
                    </div>
                    <div className='edu2'>
                        {"    "}
                        <span className="title">Chef Claude</span> {"\n"}
                        {"    "}
                        <span className="degree">React, JavaScript (ES6+), HTML, CSS, Vite, Google Gemini API</span>{"\n"}
                        <span className="string">    Developed Chef Claude, an AI-powered recipe assistant
                            {"\n"}    built with React and the Google Gemini API,
                            {"\n"}    showcasing my skills in front-end development, API integration,
                            {"\n"}    and creating responsive, user-friendly web applications. {"\n"}</span>
                        {"    "}
                        <span className="github-link">Link <a href="https://github.com/Evelyn-PA/chef_claude" target="_blank" id="github-prj">Github</a></span>{"\n"}
                    </div>
                </div>
            </div >
            <span className="bracket-left2">{"}"}</span>
        </pre>
    )
}