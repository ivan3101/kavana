import React from 'react';
import {ContactContainer} from "../contact/contact";
import {LoginContainer} from "../login/login";
import {Formik} from "formik";
import * as Yup from "yup";
import * as axios from "axios";
import RecoveryForm from "./recoveyrForm/recoveryForm";

const Recovery = () => {
    return (
        <ContactContainer>
            <h1>Recuperación de Contraseña</h1>
            <LoginContainer>
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: ""
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string()
                            .trim()
                            .required("Debe ingresar un nombre de usuario")
                            .matches(/^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){4,}[a-zA-Z0-9]$/, {
                                message:
                                    "El nombre de usuario debe tener un minimo de 6 caracteres. Puede contener letras, puntos (.) y" +
                                    " guiones bajos (_), ademas debe comenzar por una letra"
                            }),
                        email: Yup
                            .string()
                            .trim()
                            .required("Debe ingresar su correo electrónico")
                            .email("El correo ingresado es incorrecto"),
                        password: Yup
                            .string()
                            .trim()
                            .required("Debe ingresar una contraseña")
                            .matches(/^(?=.{6,}$)(?![0-9!#$.,])[a-zA-Z0-9!#$.,]+$/, {
                                message:
                                    "La contraseña debe tener un minimo de 6 caracteres. Puede contener letras, numeros y los siguientes" +
                                    " caracteres especiales (, . # $ !) y debe iniciar por una letra"
                            }),
                    })}
                    onSubmit={async (values, formikActions) => {
                        window.scrollTo(0, 0);
                        formikActions.setSubmitting(true);

                        try {
                            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/recovery`, values);

                            formikActions.resetForm();
                            formikActions.setStatus({
                                type: "success",
                                message: "Contraseña restablecida con exito. Ya puede iniciar sesión con la nueva" +
                                    " contraseña"
                            });
                        } catch (error) {
                            if (error.response) {
                                const response =
                                    error.response;

                                formikActions.setStatus({
                                    type: "error",
                                    message: response.data.message
                                });
                            } else if (error.request) {
                                formikActions.setStatus({
                                    type: "error",
                                    message:
                                        "No se pudo establecer una conexión con el servidor. Por favor, vuelva a intentarlo mas tarde"
                                });
                            } else {
                                formikActions.setStatus({
                                    type: "error",
                                    message:
                                        "Ha ocurrido un error. Por favor, vuelva a intentarlo mas tarde"
                                });
                            }
                        }
                        formikActions.setSubmitting(false);
                    }}
                    component={RecoveryForm}
                />
            </LoginContainer>
        </ContactContainer>
    );
};

export default Recovery;
