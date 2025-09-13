export default function Body() {
  const styles = {
    container: {
      padding: "16px",
      borderRadius: "8px",
      fontFamily: "monospace",
      lineHeight: "1.6",
      overflowX: "auto",
    },
    keyword: { color: "#f92672", fontSize: "24px" },
    identifier: { color: "#66d9ef", fontSize: "24px" },
    property: { color: "#FFB74D", fontSize: "18px" },
    string: { color: "#FFF", fontSize: "18px" },
    number: { color: "#FD971F", fontSize: "18px" },
  };

  return (
    <pre style={styles.container}>
      <span style={styles.keyword}>function</span>{" "}
      <span style={styles.identifier}>introduce</span>() {"{"}{"\n"}
      {"  "}
      <span style={styles.keyword}>const</span>{" "}
      <span style={styles.identifier}>student</span> = {"{"}{"\n"}
      {"    "}
      <span style={styles.property}>name:</span>{" "}
      <span style={styles.string}>"Anh (Evelyn) Nguyen"</span>,{"\n"}
      {"    "}
      <span style={styles.property}>role:</span>{" "}
      <span style={styles.string}>"Computer Applications Student"</span>,{"\n"}
      {"    "}
      <span style={styles.property}>university:</span>{" "}
      <span style={styles.string}>"Hameenlinna UAS, Finland"</span>,{"\n"}
      {"    "}
      <span style={styles.property}>year:</span>{" "}
      <span style={styles.number}>3</span>,{"\n"}
      {"    "}
      <span style={styles.property}>backstory:</span>{" "}
      <span style={styles.string}>
        "Started coding with simple web pages → now building full projects that
        actually work (most of the time)"
      </span>,{"\n"}
      {"    "}
      <span style={styles.property}>fun_fact:</span>{" "}
      <span style={styles.string}>
        "Enjoys ice skating and actually likes the Finnish snow"
      </span>,{"\n"}
      {"    "}
      <span style={styles.property}>looking_for:</span>{" "}
      <span style={styles.string}>
        "Internship starting Aug 2025 (Frontend focus, open to learn backend
        too)"
      </span>
      {"\n  }"}
      {"\n}"}
    </pre>
  );
}
