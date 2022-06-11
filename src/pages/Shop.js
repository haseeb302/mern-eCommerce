import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    margin: 20px;
`;

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`

`;

const Shop = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText> Filter Products </FilterText>
                    <Select>
                        <Option disabled selected >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select>
                        <Option disabled selected >Size</Option>
                        <Option>Extra Small</Option>
                        <Option>Small</Option>
                        <Option>Medium</Option>
                        <Option>Large</Option>
                        <Option>Extra Large</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText> Sort Products </FilterText>
                    <Select>
                        <Option selected >Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Shop
