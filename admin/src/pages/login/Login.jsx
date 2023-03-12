import React, {useState} from 'react';
import styled from "styled-components";
import {mobile} from "../../responsive";
import {login} from "../../redux/apiCalls";
import {useDispatch} from "react-redux";

const Container = styled.div `
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
          rgba(255,255,255,0.5),
          rgba(255,255,255,0.5)),
  url("https://media.istockphoto.com/id/1314651804/photo/admin-login-sign-made-of-wood-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=AAz8TPR8MNCemHjige57HjnU_73zyFSPEO4ER9dC0b8=")
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
  
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a `
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    //function to handle login button click
    const handleLoginButtonClick = (event) => {
        event.preventDefault(); // prevents the refresh of the page
        login(dispatch, {username, password});
    };

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input type="text" placeholder="Username"
                           onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input type="password" placeholder="Password"
                           onChange={(p) => setPassword(p.target.value)}
                    />
                    <Button onClick={handleLoginButtonClick}> LOGIN </Button>
                    <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;