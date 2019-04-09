import React, {Component} from 'react';
import styled from "styled-components";
import ProductCard from "./productCard/productCard";
import * as axios from "axios";
import Pagination from "../../../components/pagination/pagination";
import {addToCart} from "../../../actions/cart.actions";
import {connect} from "react-redux";
import {CatalogoContainer} from "../catalogo";
import SearchInput, {createFilter} from "react-search-input";
import { lighten } from 'polished';

const ProductsContainer = styled.div`
  width: 90%;
  
  h1 {
    text-transform: capitalize;
  }
`;

const SearchBar = styled(SearchInput)`
  width: 80%;
  margin: 0 auto;
  
  input {
  width: 100%;
  background-color: white;
  padding: 0.4rem 0.60rem;
  border-radius: 6px;
  border: 2px solid #ccc;
  color: ${props => lighten(0.1, props.theme.text)};
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  
  :focus {
    border: 2px solid ${props => props.invalid ? props.theme.warning : props.theme.secondary};
  }
  
  ::placeholder {
    color: ${props => lighten(0.3, props.theme.text)};
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
        const { category,page } = this.props.match.params;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/category/${category}?offset=${(page -1 ) * 9}`);

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
            dispatch(addToCart({productId, productName}));
        }

    };

    inCart = (productId) => {
        const {cart} = this.props;
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
        const { products, totalProducts, loading,searchTerm } = this.state;
        const { category } = this.props.match.params;

        const filteredProducts = products.filter(createFilter(searchTerm, "name"));

        return (
            <CatalogoContainer>
                <ProductsContainer>
                    <h1 style={{textTransform: 'capitalize'}}>{ category.split('-').join(' ') }</h1>
                    <SearchBar onChange={this.onSearch} placeholder={"Ingrese el texto de busqueda"}/>
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