import React, {Component} from 'react';
import styled from "styled-components";
import {Formik} from "formik";
import * as Yup from "yup";
import ProductForm from "../productForm/productForm";
import * as axios from "axios";

const AddProductContainer = styled.div`
  margin: 30px auto;
  width: 80%;
`;

const formInitValues = {
    name: '',
    sku: '',
    size: '',
    sizeByBox: '',
    piecesByBox: '',
    characteristics: [],
    icon: null,
    banner: null,
    category: 'ceramica-y-porcelanato'
};

class AddProduct extends Component {

    state = {
        submitState: '',
        message: ''
    };

    render() {
        return (
            <AddProductContainer>
                <Formik
                    initialValues={formInitValues}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().trim().required('Debe ingresar el nombre del producto'),
                        sku: Yup.string().trim().required('Debe ingresar el SKU del producto'),
                        size: Yup.string().trim().matches(/^((?:[1-9]\d*|0)?(?:\.\d+)?)x((?:[1-9]\d*|0)?(?:\.\d+)?)$/, {
                            message: 'El tamaño debe tener el formato 00x00'
                        }),
                        sizeByBox: Yup.string().trim().matches(/^(?:[1-9]\d*|0)?(?:\.\d+)?$/, {
                            message: 'El tamaño solo puede contener numeros'
                        }),
                        piecesByBox: Yup.string().trim().matches(/^([0-9]+)$/, {
                            message: 'El tamaño solo puede contener numeros'
                        }),
                        characteristics: Yup.array(),
                        icon: Yup.mixed().required('Debe ingresar el icono del producto'),
                        banner: Yup.mixed().required('Debe ingresar el banner del producto'),
                        category: Yup.string().trim().required('Debe seleccionar una categoria')
                    })}
                    onSubmit={async (values, formikAction) => {
                        this.setState(() => ({
                            submitState: '',
                            message: ''
                        }));
                        window.scrollTo(0,0);

                        formikAction.setSubmitting(true);

                        const formData = new FormData();

                        for (const entries of Object.entries(values)) {
                            formData.append(entries[0], entries[1]);
                        }

                        const response = await axios.post(`${process.env.REACT_APP_API_URL}/products`, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        });

                        this.setState(() => ({
                            submitState: 'success',
                            message: response.data.message
                        }));

                        formikAction.resetForm();
                        formikAction.setSubmitting(false);
                    }}
                    render={props => <ProductForm {...props} submitState={this.state.submitState} message={this.state.message}/>}
                />
            </AddProductContainer>
        );
    }
}

export default AddProduct;