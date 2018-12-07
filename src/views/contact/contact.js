import React from 'react';
import styled from "styled-components";
import {Formik} from "formik";
import * as Yup from "yup";
import ContactForm from "./contactForm/contactForm";

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
                    onSubmit={(values, formikActions) => {
                        formikActions.resetForm();
                        console.log(values);
                    }}
                    render={props => <ContactForm {...props} />}
                />
            </ContactContainer>
        )
    }
}

export default Contact;
