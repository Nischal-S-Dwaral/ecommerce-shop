import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";
import {publicRequest} from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";

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
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    // useDispatch is a hook to access the redux dispatch function.
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await publicRequest.get("/products/find/" + id);
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    },[id]);

    const handleQuantity = (type) => {
        if (type === "desc") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleButtonClick = () => {
        //update the cart, we will be using react redux toolkit here
        dispatch(addProduct({
            ...product,
            quantity,
            color,
            size
        }));
    };

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>
                        {product.desc}
                    </Description>
                    <Price>£ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {
                                product.color?.map((c) => (
                                    <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                                ))
                            }
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {
                                    product.size?.map((s) => (
                                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                    ))
                                }
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("desc")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("add")}/>
                        </AmountContainer>
                        <Button onClick={handleButtonClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;