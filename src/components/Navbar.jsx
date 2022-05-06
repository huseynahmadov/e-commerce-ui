import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px",marginLeft:"15px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
  ${mobile({ fontSize: "12px",marginRight: "10px"})}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Link to='/' style={{textDecoration: 'none',color:"black" }}><Logo>HUSEYN.</Logo></Link> 
                </Center>

                <Right>
                    <MenuItem><Link to='/register'>REGISTER</Link></MenuItem>
                    <MenuItem><Link to='/login'>LOGIN</Link></MenuItem>
                    <MenuItem><Link to='/cart'>CART</Link></MenuItem>
                    <MenuItem><Link to='/product'>PRODUCT</Link></MenuItem>
                    <MenuItem><Link to='/productlist'>PRODUCTLIST</Link></MenuItem>
                    <MenuItem></MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
