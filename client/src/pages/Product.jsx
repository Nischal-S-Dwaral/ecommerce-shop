import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";
import {mobile} from "../responsive";

const Container = styled.div ``;

const Wrapper = styled.div `
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    padding: "10px"
  })}
`;

const ImageContainer = styled.div `
  flex: 1;
`;

const Image = styled.img `
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({
    height: "40vh"
  })}
`;

const InfoContainer = styled.div `
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: "10px"
  })}
`;

const Title = styled.h1 `
  font-weight: 200;
`;

const Description = styled.p `
  margin: 20px 0;
`;

const Price = styled.span `
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div `
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
  ${mobile({
    width: "100%"
  })}
`;

const Filter = styled.div `
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span `
  font-weight: 200;
  font-size: 20px;
`;

const FilterColor = styled.div `
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select `
  margin-left: 10px;
  padding: 5px 0;
`;

const FilterSizeOption = styled.option ``;

const AddContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  ${mobile({
    width: "100%"
  })}
`;

const AmountContainer = styled.div `
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span `
  border-radius: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button `
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://media.istockphoto.com/id/594451448/photo/orange-sweater.jpg?s=1024x1024&w=is&k=20&c=Z4iUdZer-9iJAfw2SFDpScF4r9lI6xFq_J0e4wcHnvY="/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Jumpsuit</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur.
                    </Description>
                    <Price>$19.99</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                            <FilterColor color="orange" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;