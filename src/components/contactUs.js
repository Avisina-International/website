import { React, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import '../App.css';

function MyContactUs() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Subject: '',
    Message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.FirstName) newErrors.FirstName = 'First Name is required';
    if (!formData.LastName) newErrors.LastName = 'Last Name is required';
    if (!formData.Email) {
      newErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = 'Email is invalid';
    }
    if (!formData.Phone) newErrors.Phone = 'Phone Number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs.send('service_p7p0z1l', 'template_9n464il', formData, 'e6vRvFQ3C8IXydtFb')
        .then((response) => {
          alert('SUCCESS! Your message has been sent.');
          setFormData({
            FirstName: '',
            LastName: '',
            Email: '',
            Phone: '',
            Subject: '',
            Message: ''
          });
        }, (err) => {
          alert('FAILED... An error occurred while sending your message.');
        });
    }
  };

  return (
    <section className='contactus--section' id='contact'>
      <div className='container contact--container'>
        <Card body outline>
          <CardBody>
            <CardTitle tag="h5">
              Contact Us
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Contact us at our email for further queries.
            </CardSubtitle>
            <CardText>
              We are also actively available on social media platforms
            </CardText>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="FirstName">First Name</Label>
                    <Input
                      id="FirstName"
                      name="FirstName"
                      placeholder="i.e John"
                      type="text"
                      value={formData.FirstName}
                      onChange={handleChange}
                    />
                    {errors.FirstName && <div className="text-danger">{errors.FirstName}</div>}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="LastName">Last Name</Label>
                    <Input
                      id="LastName"
                      name="LastName"
                      placeholder="i.e Doe"
                      type="text"
                      value={formData.LastName}
                      onChange={handleChange}
                    />
                    {errors.LastName && <div className="text-danger">{errors.LastName}</div>}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input
                      id="Email"
                      name="Email"
                      placeholder="JohnDoe@example.com"
                      type="email"
                      value={formData.Email}
                      onChange={handleChange}
                    />
                    {errors.Email && <div className="text-danger">{errors.Email}</div>}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Phone">Phone Number</Label>
                    <Input
                      id="Phone"
                      name="Phone"
                      placeholder="i.e 123456789"
                      type="text"
                      value={formData.Phone}
                      onChange={handleChange}
                    />
                    {errors.Phone && <div className="text-danger">{errors.Phone}</div>}
                  </FormGroup>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col md={6} style={{ alignItems: 'center' }}>
                  <FormGroup>
                    <Label for="Subject">Purpose of your Email</Label>
                    <Input
                      id="Subject"
                      name="Subject"
                      placeholder="i.e Barbery Catalogue"
                      type="text"
                      value={formData.Subject}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col style={{ alignItems: 'center' }}>
                  <FormGroup>
                    <Label for="Message">Enter Your Message</Label>
                    <Col>
                      <Input
                        id="Message"
                        name="Message"
                        type="textarea"
                        placeholder="i.e Barbery Catalogue"
                        value={formData.Message}
                        onChange={handleChange}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>

              <Button
                className='cool-button'
                type="submit"
                style={{
                  width: "100px",
                  borderRadius: "25px",
                  backgroundColor: 'rgb(36, 107, 145)',
                  transition: "background-color 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)"
                }}>
                Send
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default MyContactUs;
