import { changeFilter } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Form, Container, Row, Col } from "react-bootstrap";

const Filter = () => {
  const value = useSelector((state) => state.contacts.filter);
  const dispath = useDispatch();

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Find contacts by name</Form.Label>
            <Row>
              <Col sm={6}>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={value}
                  onChange={(e) => dispath(changeFilter(e.target.value))}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                />
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Filter;
