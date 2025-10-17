import '../App.css'

export default function Education() {
    return (
        <pre className="container">
            <span className="keyword">function</span>{" "}
            <span className="identifier">AnhNguyen</span>
            <span className="roundBracket">(education)</span>
            <span className="bracket">{" {"}</span>{"\n"}
            {"  "}

            <div className="container2">
                <div>
                    {"    "}
                    <span className="property">HAMK University of Applied Sciences (08.2023 - Now)</span> {"\n"}
                    {"    "}
                    <span className="property">Bachelor of Computer Applications</span>{"\n"}
                    {"    "}
                    <span className="string">Coursework: Web Programming, Web Framework Project{"\n"}, Web Accessibility, Communication in Customer Projects, {"\n"} JavaScript, Database Management, Software Testing
                    </span>{"\n"}
                </div>
                <div>
                    {"    "}
                    <span className="property">Amity Global Institute (11.2022 - 06.2023)</span> {"\n"}
                    {"    "}
                    <span className="property">Diploma in Computing</span>{"\n"}
                    {"    "}
                </div>
            </div >
            <span className="bracket-left2">{"}"}</span>


        </pre>
    )
}