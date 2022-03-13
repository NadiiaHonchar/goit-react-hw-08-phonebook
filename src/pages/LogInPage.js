import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/authOperation";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function LogInPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
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
            LogIn
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default LogInPage;
