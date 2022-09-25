import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignIn from './SignIn';
import SignUp from './SignUp';

const  Containers = _ => {
  return (
    <Container className = "cont">
      <Row>
        <Col sm={8}><SignIn/></Col>
        <Col sm={4}><SignUp/></Col>
      </Row>
    </Container>
  );
}

export default Containers;