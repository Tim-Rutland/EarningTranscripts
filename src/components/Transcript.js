import { Card } from "react-bootstrap";

const Transcript = (props) => {
    return <Card className="mt-2">
        {props.transcript}
    </Card>
}

export default Transcript;