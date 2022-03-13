import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContact } from "../../redux/contacts_operation";
import { addContact } from "../../redux/contacts_operation";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function ContactForm() {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => dispatch(getContact()), [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    setContacts({ name, number });
  }, [name, number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(contacts));
    reset();
  };

  const reset = () => {
    setContacts([]);
    setName("");
    setNumber("");
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Row>
              <Col sm={1}>
                <Form.Label>Name</Form.Label>
              </Col>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTel">
            <Row>
              <Col sm={1}>
                <Form.Label>Number</Form.Label>
              </Col>
              <Col sm={5}>
                <Form.Control
                  type="tel"
                  placeholder="Enter number"
                  name="number"
                  value={number}
                  onChange={handleInputChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  required
                />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="outline-success" type="submit" name="button">
            Add contact
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default ContactForm;
