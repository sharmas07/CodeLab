import Card from "react-bootstrap/Card";

function OutputArea({ output, compiling, stderr, status_id }) {
  return (
    <Card bg="dark" className="m-3" text="light">
      <Card.Body>
        OUTPUT:{" "}
        {compiling ? (
          <p style={{ color: "yellowgreen" }}>compiling..</p>
        ) : output ? (
          <p
            style={{
              color: "#0cf60c",
            }}
          >
            {output}
          </p>
          
        ) : (
          <p style={{ color: "red" }}>{stderr.slice(20)}</p>
        )}
      </Card.Body>
    </Card>
  );
}

export default OutputArea;
