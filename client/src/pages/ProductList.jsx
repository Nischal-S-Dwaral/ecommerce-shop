import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive";

const Container = styled.div `
  
`;

const Title = styled.h1 `
  margin: 20px;
`;

const FilterContainer = styled.div `
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div `
  margin: 20px;
  ${mobile({
    margin: "0 20px",
    display: "flex",
    flexDirection: "column"
  })}
`;

const FilterText = styled.span `
  font-weight: 600;
  font-size: 20px;
  margin-right: 20px;
  ${mobile({
    marginRight: "0"
  })}
`;

const Select = styled.select `
  padding: 10px;
  margin-right: 20px;
  ${mobile({
    margin: "10px 0"
  })}
`;

const Option = styled.option ``;

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>
                Dresses
            </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option value="White">White</Option>
                        <Option value="Black">Black</Option>
                        <Option value="Red">Red</Option>
                        <Option value="Blue">Blue</Option>
                        <Option value="Yellow">Yellow</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option value="XS">XS</Option>
                        <Option value="S">S</Option>
                        <Option value="M">M</Option>
                        <Option value="L">L</Option>
                        <Option value="XL">XL</Option>
                        <Option value="XXL">XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option value="Price (asc)">Price (asc)</Option>
                        <Option value="Price (desc)">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;