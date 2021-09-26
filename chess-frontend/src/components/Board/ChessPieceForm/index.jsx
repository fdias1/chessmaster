import { Form, Row, Col } from 'react-bootstrap'
import FormChessPieceTypeSelect from './FormChessPieceTypeSelect'
import FormChessPieceColorRadioButtons from './FormChessPieceColorRadioButtons'
import FormChessPieceActionButtons from './FormChessPieceActionButtons'

const ChessPieceForm = (props) => {
    return (
        <Form onSubmit={(e) => e.preventDefault()} className="p-3 border border-light rounded my-5 mb-0">
            <FormChessPieceTypeSelect />
            <Row>
                <Col xs='4'>
                    <FormChessPieceColorRadioButtons />
                </Col>
                <Col xs='8'>
                    <FormChessPieceActionButtons />
                </Col>
            </Row>
        </Form>
    );
}
 
export default ChessPieceForm;