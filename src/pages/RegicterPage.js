import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/authOperation";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
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
              <Col>
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col sm={1}>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Row>
              <Col sm={1}>
                <Form.Label>Password</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="outline-success" type="submit" name="button">
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default RegisterPage;
