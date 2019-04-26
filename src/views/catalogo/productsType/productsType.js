import React, { Component } from 'react';
import styled from "styled-components";
import ProductCard from "./productCard/productCard";
import ka from "../../../assets/logo/k.png";
import ResponsiveImg from "../../../../src/components/responsiveImg/responsiveImg";
import * as axios from "axios";
import Pagination from "../../../components/pagination/pagination";
import { addToCart } from "../../../actions/cart.actions";
import { connect } from "react-redux";
import { CatalogoContainer } from "../catalogo";
import SearchInput, { createFilter } from "react-search-input";
import { lighten } from 'polished';

const ProductsContainer = styled.div`
  width: 90%;

  > img {
    width: 7%;
    float: left;
  }
  
  h1 {
    text-transform: capitalize;
  }

  @media (max-width: 700px) {
    > img {
        width: 20%;
        float: left;
    }
  }

`;



const SearchBar = styled(SearchInput)`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  
  input {
  width: 40%;
  background-color: white;
  padding: 0.4rem 0.60rem;
  border-radius: 6px;
  border: 2px solid #ccc;
  color: ${props => lighten(0.1, props.theme.text)};
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  
  :hover{
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    border-color: #FF7219;
    outline: 0;  
  }

  :focus {
    border-color: #FF7219;
    background: #e9e9e9;
    -webkit-box-shadow: 0.1px 0.1px 10px #FF7219;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    outline: 0;

  }

  }

  @media (max-width: 700px) {
    input {
        width: 65%;
    }
  }
`;

class ProductsType extends Component {

    state = {
        products: [],
        totalProducts: 0,
        loading: true,
        modalOpen: false,
        modalMessage: '',
        searchTerm: ""
    };

    async componentDidMount() {
        const { category, page } = this.props.match.params;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/category/${category}?offset=${(page - 1) * 9}`);

        const { products, totalProducts } = response.data.data;

        this.setState(() => ({
            products,
            totalProducts,
            loading: false
        }))
    }

    async componentDidUpdate(prevProps) {
        const { page, category } = this.props.match.params;
        const { page: prevPage, category: prevCategory } = prevProps.match.params;

        if (page !== prevPage) {
            this.setState(() => ({
                loading: true,
                products: []
            }));
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/category/${category}?offset=${(page - 1) * 9}`);

            const { products } = response.data.data;

            this.setState(() => ({
                products,
                loading: false
            }));
        } else if (category !== prevCategory) {
            this.setState(() => ({
                loading: true,
                products: []
            }));
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/category/${category}?offset=${(page - 1) * 9}`);

            const { products } = response.data.data;

            this.setState(() => ({
                products,
                loading: false
            }));
        }
    }

    onChangePage = (page) => {
        const { history } = this.props;
        const { category } = this.props.match.params;

        history.push(`/catalogo/${category}/` + page);
    };

    onClickProduct = (id) => {
        const { history } = this.props;

        history.push(`/catalogo/producto/${id}`);
    };

    onAddCart = (productId, productName) => {
        const { dispatch } = this.props;

        if (!this.inCart(productId)) {
            dispatch(addToCart({ productId, productName }));
        }

    };

    inCart = (productId) => {
        const { cart } = this.props;
        return cart.findIndex(product => product.productId === productId) > -1;
    };

    renderFn = (product, index) => (
        <ProductCard
            icon={product.icon.path}
            name={product.name}
            size={product.size}
            key={index}
            onClick={() => this.onClickProduct(product._id)}
            onAddToCart={() => this.onAddCart(product._id, product.name)}
            cart={true}
            inCart={this.inCart(product._id)}
        >
        </ProductCard>
    );

    onSearch = (term) => {
        this.setState(() => ({
            searchTerm: term
        }))
    };

    render() {
        const { products, totalProducts, loading, searchTerm } = this.state;
        const { category } = this.props.match.params;

        const filteredProducts = products.filter(createFilter(searchTerm, "name"));

        return (
            <CatalogoContainer>
                <ProductsContainer>
                    <ResponsiveImg src={ka}/>
                    <SearchBar style={{ margin: '1.5rem 0 0 1rem' }} onChange={this.onSearch} placeholder={"Buscar Producto"} />
                    <br/>
                    <h1 style={{ textTransform: 'capitalize' }}>{category.split('-').join(' ')}</h1>
                    <Pagination
                        items={filteredProducts}
                        totalItems={totalProducts}
                        loading={loading}
                        onChangePage={this.onChangePage}
                        renderFn={this.renderFn}
                    />
                </ProductsContainer>
            </CatalogoContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.products
});

export default connect(mapStateToProps)(ProductsType);