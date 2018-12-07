import React from 'react';
import styled from "styled-components";
import {Formik} from "formik";
import * as Yup from "yup";
import ContactForm from "./contactForm/contactForm";
import axios from "axios";

const formInitValues = {
    name: '',
    email: '',
    message: ''
};

const ContactContainer = styled.div`
  margin: 40px auto 0;
  padding: 0 2rem;
  width: 80%;
`;


class Contact extends React.Component {
    state = {
        submitState: '',
        message: ''
    };

    render() {

        return (
            <ContactContainer>
                <h1>Contactanos</h1>
                <Formik
                    initialValues={formInitValues}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().trim().required('Debe ingresar su nombre').matches(/^[a-zA-Z\s]+$/, {
                            message: 'Su nombre solo puede contener letras y espacios'
                        }),
                        'email': Yup.string().trim().required('Debe ingresar su email').email('Debe' +
                            ' ingresar un email con formato valido'),
                        'message': Yup.string().trim().required('Debe ingresar su mensaje')
                    })}
                    onSubmit={async (values, formikActions) => {
                        try {
                            await axios.post(`${process.env.REACT_APP_API_URL}/messages`, values);
                            this.setState(() => ({
                                submitState: 'success',
                                message: 'Mensaje Enviado con exito'
                            }))
                        } catch (e) {
                            if (e.response) {
                                this.setState(() => ({
                                    submitState: 'error',
                                    message: e.response.data.message
                                }))
                            } else {
                                this.setState(() => ({
                                    submitState: 'error',
                                    messsag: 'Ocurrio un error al enviar el mensaje. Por favor, vuelva a' +
                                        ' intentarlo mas tarde'
                                }))
                            }
                        }

                        formikActions.resetForm();
                    }}
                    render={props => <ContactForm {...props} submitState={this.state.submitState} message={this.state.message}/>}
                />
            </ContactContainer>
        )
    }
}

export default Contact;
