import { Form, Button } from "react-bootstrap";

const SearchForm = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmit(
            e.target.elements.symbol.value.trim(),
            e.target.elements.year.value,
            e.target.elements.quarter.value
        );
    }

    const currentYear = new Date().getFullYear();
    const years = Array(currentYear - 2000 + 1).fill().map((_, idx) => 2000 + idx);
    return (
        <div className="align-items-center mx-auto w-75">
            <Form className="row" onSubmit={submitHandler}>
                <Form.Group className="col-md-3 text-start mt-3" controlId="symbol">
                    <Form.Label>Symbol</Form.Label>
                    <Form.Control type="text" required onChange={(e) => {e.target.value = e.target.value.toUpperCase()}} />
                </Form.Group>
                <Form.Group className="col-md-3 text-start mt-3" controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Select aria-label="Default select example">
                        {
                            years.map((year) => <option selected={year === currentYear} value={year}>{year}</option>)
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="col-md-3 text-start mt-3" controlId="quarter">
                    <Form.Label>Quarter</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="col-md-3 d-flex flex-column justify-content-end mt-3">
                    <Button variant="primary" type="submit">View</Button>
                </Form.Group>

            </Form>
        </div>

    );
}

export default SearchForm;