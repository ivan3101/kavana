import React from 'react';
import * as Yup from "yup";
import {LoginContainer} from "../login/login";
import {Formik} from "formik";
import * as axios from "axios";
import RegisterForm from "./registerForm/registerForm";

const registerInitValues = {
    firstname: "",
    lastname: "",
    identification: {
        type: "V",
        number: ""
    },
    email: "",
    username: "",
    password: ""
};

const registerValidationSchema = Yup.object().shape({
    name: Yup
        .string()
        .trim()
        .required("Debe ingresar su nombre o razón social")
        .matches(/^[a-zA-Z\s]+$/, {
            excludeEmptyString: true,
            message: "Solo puede ingresar letras y espacios"
        }),
    email: Yup
        .string()
        .trim()
        .required("Debe ingresar su correo electronico")
        .email("El correo ingresado es incorrecto"),
    identification: Yup.object().shape({
        number: Yup.string()
            .trim()
            .required("Debe ingresar su numero de cedula")
            .matches(/^([0-9]{6,10})$/, {
                excludeEmptyString: true,
                message: "El numero de cedula es invalido"
            }),
        type: Yup.string()
            .trim()
            .required("Debe seleccionar su tipo de cedula")
            .matches(/^([VEJPG])$/, {
                excludeEmptyString: true,
                message: "El tipo de cedula seleccionado es invalido"
            })
    }),
    username: Yup
        .string()
        .trim()
        .required("Debe ingresar un nombre de usuario")
        .matches(/^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){4,}[a-zA-Z0-9]$/, {
            message:
                "El nombre de usuario debe tener un minimo de 6 caracteres. Puede contener letras, puntos (.) y" +
                " guiones bajos (_), ademas debe comenzar por una letra"
        }),
    password: Yup
        .string()
        .trim()
        .required("Debe ingresar una contraseña")
        .matches(/^(?=.{6,}$)(?![0-9!#$.,])[a-zA-Z0-9!#$.,]+$/, {
            message:
                "La contraseña debe tener un minimo de 6 caracteres. Puede contener letras, numeros y los siguientes" +
                " caracteres especiales (, . # $ !) y debe iniciar por una letra"
        }),
});

const Register = () => {
    return (
        <LoginContainer>
            <h1>Registrarse</h1>
            <Formik
                initialValues={registerInitValues}
                validationSchema={registerValidationSchema}
                onSubmit={async (values, formikActions) => {
                    window.scrollTo(0,0);
                    formikActions.setSubmitting(true);

                    try {

                        const { identification } = values;

                        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
                            ...values,
                            identification: `${identification.type}-${identification.number}`
                        });

                        formikActions.resetForm();
                        formikActions.setStatus({
                            type: "success",
                            message: "Se ha registrado con exito. Ahora puede proceder a iniciar sesión"
                        })

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
                component={RegisterForm}
            />
        </LoginContainer>
    );
};

export default Register;
