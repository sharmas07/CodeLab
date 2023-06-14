import Card from "react-bootstrap/Card";

function OutputArea({output}) {
  return (
    <Card bg='dark' className="m-3" text="light">
        <Card.Body>

        OUTPUT: <p style={
          {
            color:'#0cf60c',
            
          }
        }>{output}</p>
        </Card.Body>
    </Card>
  );
}

export default OutputArea;
