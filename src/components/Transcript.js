import { Card } from "react-bootstrap";

const Transcript = (props) => {
    return <Card className="mt-3 mb-3 p-4 mx-auto w-75">
        {props.transcript?.map((addressing) => <>
            <p className="fw-bold text-start">{addressing[0]}</p>
            <p className="text-start">{addressing[1]}</p>
            <hr class="mt-2 mb-3"/>
        </>)}
    </Card>
}

export default Transcript;