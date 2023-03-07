import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div `
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
          rgba(255,255,255,0.5),
          rgba(255,255,255,0.5)),
  url("https://as1.ftcdn.net/v2/jpg/02/71/77/56/1000_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg")
  center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div `
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({
    width: "75%"
  })}
`;

const Title = styled.h1 `
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form `
  display: flex;
  flex-direction: column;
`;

const Input = styled.input `
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button `
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a `
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input type="text" placeholder="Username" />
                    <Input type="password" placeholder="Password" />
                    <Button>LOGIN</Button>
                    <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;