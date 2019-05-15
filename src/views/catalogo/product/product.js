import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {addToCart} from "../../../actions/cart.actions";
import styled from "styled-components";
import isEmpty from "lodash.isempty";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import ResponsiveImg from "../../../components/responsiveImg/responsiveImg";
import {AddToCart} from "../productsType/productCard/productCard";
import ImageZoom from 'react-medium-image-zoom'
import SimpleZoom from 'react-simple-zoom'


const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("${props => props.banner}");
  ${'' /* background-size: contain; */}
  background-position: center;
  background-repeat: no-repeat;
`;

const ProductContainer = styled.div`
  width: 90%;
  margin: 0 auto 30px auto;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ProductDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ProductIcon = styled.div`
  cursor: pointer;
  height: auto;
  width: 50%;
  margin-bottom:10px;
  max-height: 300px;

  @media (max-width: 700px) {
    width: 100%;
    max-height: 100%;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;

  p:first-child {
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

const Powered = styled.span`
  position: relative;
  bottom: 1ex;
  font-size: 80%;
`;

const CharacteristicsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 700px) {
    width: 100%;
    gap: 0;
    justify-content: center;
  }
`;

const Characteristic = styled.div`
  height: 110px;
  width: auto;
`;

const AddToCartProduct = styled(AddToCart)`
  position: static;
  top: auto;
  right: auto;
  width: 55px;
  height: 55px;
  transform: translateY(0);
`;

const DataSheet = styled.table`

  margin: 0 auto;
  text-align: left;
  font-size: 0.90rem;
  border-collapse: collapse;
  width: 40%;

  th, td {
    padding: 0.85rem;
    margin: 0;
  }

  tr:hover {
    background-color: #ebebeb;
  }

  @media (max-width: 700px) {
  width: 80%;
  }
`;

const DSHeader = styled.thead`
  background-color: #ebebeb;
`;

class Product extends React.Component {

    state = {
        product: {},
        loading: false
    };

    async componentDidMount() {
        this.setState(() => ({
            loading: true
        }));
        const { productId } = this.props.match.params;
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}`);

        this.setState(() => ({
            product: response.data.data.product,
            loading: false
        }))
    }

    addToCart = (productId, productName) => {
        const { dispatch } = this.props;

        if (!this.inCart(productId)) {
            dispatch(addToCart({productId, productName}));
        }

    };

    inCart = (productId) => {
        const {cart} = this.props;
        return cart.findIndex(product => product.productId === productId) > -1;
    };

    render() {
        const {product, loading} = this.state;
        if (loading || isEmpty(product)) {
            return (
                <div>
                    <SpinnerLoading/>
                </div>
            )
        } else {
            if(product.piecesByBox!=='' && product.sizeByBox1!==''){
               return (
                  <div>
                    <Banner banner={product.banner.path}/>
                    <ProductContainer>
                        <ProductDescription>
                            <ProductIcon>
                                <SimpleZoom
                                    thumbUrl={product.icon.path}
                                    fullUrl={product.icon.path}
                                    zoomScale={2.6}
                                    onEnterCallback={() => { /* Do something on mouseenter */ }}
                                    onExitCallback={() => { /* Do something on mouseout */ }}
                                    onExitTimeout={2000}
                                />

                            </ProductIcon>
                            <ProductDetails>
                                <p>{product.name}</p>
                                <AddToCartProduct onClick={() => this.addToCart(product._id, product.name)} inCart={this.inCart(product._id)}/>
                            </ProductDetails>
                        </ProductDescription>

                        <CharacteristicsContainer>
                            {
                                product.characteristics.map(characteristic => (
                                    <Characteristic key={characteristic}>
                                        <ResponsiveImg src={`${process.env.REACT_APP_API_PUBLIC}/productIcon/${characteristic}`}/>
                                    </Characteristic>
                                ))
                            }
                        </CharacteristicsContainer>
                    </ProductContainer>

                    <DataSheet>
                        <DSHeader>
                        <tr>
                            <th>
                                Atributo
                            </th>
                            <th>
                                Detalle
                            </th>
                        </tr>
                        </DSHeader>
                        <tbody>
                        <tr>
                            <td>Nombre</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td>SKU</td>
                            <td>{product.sku}</td>
                        </tr>
                        <tr>
                            <td>Dimensiones (m<Powered>2</Powered>)</td>
                            <td>{product.size} m<Powered>2</Powered></td>
                        </tr>
                        <tr>
                            <td>Piezas por Caja</td>
                            <td>{product.piecesByBox}</td>
                        </tr>
                        <tr>
                            <td>Empaque (m<Powered>2</Powered>)</td>
                            <td>{product.sizeByBox} m<Powered>2</Powered></td>
                        </tr>
                        </tbody>
                    </DataSheet>
                </div>
                )
            }else{
                if(product.characteristics==''){
                    return (
                        <div>
                            <Banner banner={product.banner.path}/>
                            <ProductContainer>
                                <ProductDescription>
                                    <ProductIcon>
                                        <SimpleZoom
                                            thumbUrl={product.icon.path}
                                            fullUrl={product.icon.path}
                                            zoomScale={2.6}
                                            onEnterCallback={() => { /* Do something on mouseenter */ }}
                                            onExitCallback={() => { /* Do something on mouseout */ }}
                                            onExitTimeout={2000}
                                        />

                                    </ProductIcon>
                                    <ProductDetails>
                                        <p>{product.name}</p>
                                        <AddToCartProduct onClick={() => this.addToCart(product._id, product.name)} inCart={this.inCart(product._id)}/>
                                    </ProductDetails>
                                </ProductDescription>

                                {/* <CharacteristicsContainer>
                                    {
                                        product.characteristics.map(characteristic => (
                                            <Characteristic key={characteristic}>
                                                <ResponsiveImg src={`${process.env.REACT_APP_API_PUBLIC}/productIcon/${characteristic}`}/>
                                            </Characteristic>
                                        ))
                                    }
                                </CharacteristicsContainer> */}
                            </ProductContainer>

                            <DataSheet>
                                <DSHeader>
                                <tr>
                                    <th>
                                        Atributo
                                    </th>
                                    <th>
                                        Detalle
                                    </th>
                                </tr>
                                </DSHeader>
                                <tbody>
                                <tr>
                                    <td>Nombre</td>
                                    <td>{product.name}</td>
                                </tr>
                                <tr>
                                    <td>SKU</td>
                                    <td>{product.sku}</td>
                                </tr>
                                <tr>
                                    <td>Dimensiones (m<Powered>2</Powered>)</td>
                                    <td>{product.size} m<Powered>2</Powered></td>
                                </tr>
                                </tbody>
                            </DataSheet>
                        </div>
                    )
                }else{
                    return (
                        <div>
                          <Banner banner={product.banner.path}/>
                          <ProductContainer>
                              <ProductDescription>
                                  <ProductIcon>
                                    <SimpleZoom
                                        thumbUrl={product.icon.path}
                                        fullUrl={product.icon.path}
                                        zoomScale={2.6}
                                        onEnterCallback={() => { /* Do something on mouseenter */ }}
                                        onExitCallback={() => { /* Do something on mouseout */ }}
                                        onExitTimeout={2000}
                                    />
                                  </ProductIcon>
                                  <ProductDetails>
                                      <p>{product.name}</p>
                                      <AddToCartProduct onClick={() => this.addToCart(product._id, product.name)} inCart={this.inCart(product._id)}/>
                                  </ProductDetails>
                              </ProductDescription>

                              <CharacteristicsContainer>
                                  {
                                      product.characteristics.map(characteristic => (
                                          <Characteristic key={characteristic}>
                                              <ResponsiveImg src={`${process.env.REACT_APP_API_PUBLIC}/productIcon/${characteristic}`}/>
                                          </Characteristic>
                                      ))
                                  }
                              </CharacteristicsContainer>
                          </ProductContainer>

                          <DataSheet>
                              <DSHeader>
                              <tr>
                                  <th>
                                      Atributo
                                  </th>
                                  <th>
                                      Detalle
                                  </th>
                              </tr>
                              </DSHeader>
                              <tbody>
                              <tr>
                                  <td>Nombre</td>
                                  <td>{product.name}</td>
                              </tr>
                              <tr>
                                  <td>SKU</td>
                                  <td>{product.sku}</td>
                              </tr>
                              <tr>
                                  <td>Dimensiones (m<Powered>2</Powered>)</td>
                                  <td>{product.size} m<Powered>2</Powered></td>
                              </tr>
                              </tbody>
                          </DataSheet>
                      </div>
                      )
                }

            }

        }
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.products
});

export default connect(mapStateToProps)(Product);
