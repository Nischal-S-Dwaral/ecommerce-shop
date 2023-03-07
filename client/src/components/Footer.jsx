import React from 'react';
import styled from "styled-components";
import {Facebook, Instagram, MailOutlined, Phone, Room, Twitter} from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div `
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Left = styled.h1 `
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1 `
      
`;

const Description = styled.p `
  margin: 20px 0;
  font-size: 14px;
  font-weight: 300;
`;

const SocialContainer = styled.div `
  display: flex;
`;

const SocialIcon = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div `
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none"
  })}
`;

const Title = styled.h3 `
  margin-bottom: 30px;
`;

const List = styled.ul `
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li `
  width:50%;
  margin-bottom: 10px;
`;

const Right = styled.div `
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "lightgrey",
  })}
`;

const ContactItem = styled.div `
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img `
  width: 200px;
  height: 80px;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MYNTRA</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>About</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>60 Avenue, Shirley, Southampton
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+44 123 456 789
                </ContactItem>
                <ContactItem>
                    <MailOutlined style={{marginRight:"10px"}}/>contact@myntralite.com
                </ContactItem>
                <Payment src="https://as2.ftcdn.net/v2/jpg/04/73/84/61/1000_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg"/>
            </Right>
        </Container>
    );
};

export default Footer;