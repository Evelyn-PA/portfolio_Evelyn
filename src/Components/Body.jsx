export default function Body() {

  return (
    <pre className="container">
      <span className="keyword">function</span>{" "}
      <span className="identifier">introduce</span>
      <span className="roundBracket">()</span>
      <span className="bracket">{" {"}</span>{"\n"}
      {"  "}
      <span className="keyword2">const</span>{" "}
      <span className="identifier2">student</span>
      <span className="roundBracket"> = </span> 
      <span className="bracket">{"{"}</span>
      {"\n"}

      <div className="container2">
        {"    "}
        <span className="property">name:</span>{" "}
        <span className="string">"Anh (Evelyn) Nguyen,"</span>{"\n"}
        {"    "}
        <span className="property">role:</span>{" "}
        <span className="string">"Computer Applications Student,"</span>{"\n"}
        {"    "}
        <span className="property">university:</span>{" "}
        <span className="string">"Hameenlinna UAS, Finland,"</span>{"\n"}
        {"    "}
        <span className="property">year:</span>{" "}
        <span className="number">3,</span>{"\n"}
        {"    "}
        <span className="property">backstory:</span>{" "}
        <span className="string">
          "Started coding with simple web pages → now {"\n"}    building full projects that
          actually work (most of the time)",
        </span>{"\n"}
        {"    "}
        <span className="property">fun_fact:</span>{" "}
        <span className="string">
          "Enjoys ice skating and actually likes the Finnish snow",
        </span>{"\n"}
        {"    "}
        <span className="property">looking_for:</span>{" "}
        <span className="string">
          "Internship starting Aug 2025 (Frontend focus, open to learn backend
          too)"
        </span> {"\n"}

      </div >
      <span className="bracket-left">{"}"}</span>
      {"\n"}
      <span className="bracket-left2">{"}"}</span>


    </pre>
  )
}
