import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";

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
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    //This contains the different filter options selected
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        });
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>
                {category.toUpperCase()}
            </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option value="white">White</Option>
                        <Option value="black">Black</Option>
                        <Option value="red">Red</Option>
                        <Option value="blue">Blue</Option>
                        <Option value="yellow">Yellow</Option>
                        <Option value="grey">Grey</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
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
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            {/* passing the selected category, filters and the sorting order selected */}
            <Products cat={category} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default ProductList;