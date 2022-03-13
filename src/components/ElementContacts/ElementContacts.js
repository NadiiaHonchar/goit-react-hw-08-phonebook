import PropTypes from "prop-types";
import { Button, Container, Row, Col } from "react-bootstrap";

const ElementContacts = ({ contacts: { id, name, number }, onDelContact }) => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={2}>
            <p>{name} :</p>
          </Col>
          <Col sm={2}>
            <p>{number}</p>
          </Col>
          <Col>
            <Button
              variant="outline-success"
              type="submit"
              name="button"
              onClick={() => onDelContact(id)}
            >
              Delete contact
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

ElementContacts.propTypes = {
  contacts: PropTypes.objectOf(PropTypes.string).isRequired,
  onDelContact: PropTypes.func.isRequired,
};

export default ElementContacts;
