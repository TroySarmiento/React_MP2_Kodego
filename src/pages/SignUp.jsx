import { createClient } from "@supabase/supabase-js";
import { Row, Col, Form, Button ,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabasePublicKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY;

const supabase = createClient(supabaseUrl, supabasePublicKey);

const SignUp = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });
            if (error) throw error;
            console.log('User signed up successfully');
        } catch (error) {
            console.log('Error signing up', error);
        }
    };

    return (
        <Card style={{ margin: '50px auto', backgroundColor:"#FFBF9B", width:"600px", height:"400px", textAlign: "center" }}>
        <h2 style={{textAlign:"center",marginTop:"20px"}}>Nice decision. We'll help you improve your table tennis.</h2>
        <h2 style={{textAlign:"center"}}>SIGN UP NOW!</h2>
        <Card.Body>
        <Row className='d-flex justify-content-center'>
            <Col md={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your registered email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required></Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">Sign In</Button>

                    <p className='mt-3'> Already have account? <Link to="/signin">sign in!</Link></p>

                </Form>
            </Col>
        </Row>
        </Card.Body>
       </Card>
    );
};

export default SignUp;
