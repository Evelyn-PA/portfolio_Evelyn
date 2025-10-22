import '../App.css'
import Img from "/Image/Line.png"
export default function Education() {
    return (
        <pre className="container">
            <span className="keyword">function</span>{" "}
            <span className="identifier">AnhNguyen</span>
            <span className="name">(education)</span>
            <span className="bracket">{" {"}</span>{"\n"}

            <div className="containerEdu">
                <div className='line'>
                    <img src={Img} alt="line" id="line" />
                </div>
                <div>
                    <div className='edu1'>
                        {"    "}
                        <span className="university">HAMK University of Applied Sciences (08.2023 - Now)</span> {"\n"}
                        {"    "}
                        <span className="degree">Bachelor of Computer Applications</span>{"\n"}
                        {"    "}
                        <span className="string">Coursework: Web Programming, Web Framework Project,{"\n"}    Web Accessibility, Communication in Customer Projects, {"\n"}    JavaScript, Database Management, Software Testing
                        </span>{"\n"}
                    </div>
                    <div className='edu2'>
                        {"    "}
                        <span className="university">Amity Global Institute (11.2022 - 06.2023)</span> {"\n"}
                        {"    "}
                        <span className="degree">Diploma in Computing</span>{"\n"}
                        {"    "}
                    </div>
                </div>

            </div >
            <span className="bracket-left2">{"}"}</span>


        </pre>
    )
}