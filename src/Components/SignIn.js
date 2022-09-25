import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import FacebookIcon from '@material-ui/icons/Facebook';
const SignIn = _ => {
    return (
        <div className='whiteb'>
            <p><span className='green'>Geekster</span> technology</p>
            <br/>
            <br/>
            <div className='center'>
                <h2 className='green'>Sign in to Account</h2>
                <h3 className='green'><strong>_____</strong></h3>
                <button className='circle'>f</button>
                <button className='circle'>In</button>
                <button className='circle'>G+</button>
                <br/>
                 <span>or use your email account</span>
                 <br/>
                 <br/>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="SignIn">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="input" placeholder="Enter your Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="SignIn">
                        <Form.Label column sm="2">
                            Password  &nbsp;
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Container>
                        <Row>
                            <Col>
                            <Form.Check
                                type='checkbox'
                                label='Remember Me'
                            />
                            </Col>
                          
                            <Col>
                            <a href='#' ><span className='removeBlue'><strong> forgot password  </strong></span> </a> <br/>
                            </Col>
                        </Row>
                    </Container>
                            
                </Form>
                
                <button className='btn-radius mt-3'>Sign In</button><br/>
      
                <a href='#' ><span className='removeBlue'>Privacy Policy</span></a> <strong> . </strong>
                <a href='#' ><span className='removeBlue'> Terms 	&amp; Condition</span> </a> <br/>
            </div>
        </div>
    )
}
export default SignIn;