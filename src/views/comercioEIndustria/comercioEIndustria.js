import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./sidebar/sidebar";
import Constructors from "./constructors/constructors";
import Installers from "./installers/installers";
import Architects from "./architects/architects";
import InteriorDesign from "./interiorDesign/interiorDesign";
import TextContainer from "./textContainer/textContainer";
import {Formik} from "formik";
import * as Yup from "yup";
import AllyForm from "./allyForm/allyForm";

const Container = styled.div`
  width: 90%;
  margin: 50px auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const formInitValues = {
    'name': '',
    'lastname': '',
    'phone': '',
    'email': ''
};

class ComercioEIndustria extends Component {
    render() {
        const { match } = this.props;
        return (
            <div>
                <Container>
                    <h1>Comercio é Industria</h1>

                    <ContentContainer>
                        <Sidebar/>
                        <TextContainer>
                            <Switch>
                                <Route path={`${match.path}/constructores`} component={Constructors}/>
                                <Route path={`${match.path}/instaladores`} component={Installers}/>
                                <Route path={`${match.path}/arquitectos`} component={Architects}/>
                                <Route path={`${match.path}/diseñadores-de-interiores`} component={InteriorDesign}/>
                                <Redirect to={`${match.url}/constructores`}/>
                            </Switch>

                            <Formik
                                initialValues={formInitValues}
                                validationSchema={Yup.object().shape({
                                    'name': Yup.string().trim().required('Debe ingresar su nombre').matches(/^[a-zA-Z\s]+$/, {
                                        message: 'Su nombre solo puede contener letras y espacios'
                                    }),
                                    'lastname': Yup.string().trim().required('Debe ingresar su apellido').matches(/^[a-zA-Z\s]+$/, {
                                        message: 'Su apellido solo puede contener letras y espacios'
                                    }),
                                    'phone': Yup.string().trim().required('Debe ingresar su numero de telefono').matches(/^([0-9]{4})-([0-9]{7}$)/, {
                                        message: 'El numero de telefono debe tener el formato XXXX-XXXXXXX'
                                    }),
                                    'email': Yup.string().trim().required('Debe ingresar su email').email('Debe' +
                                        ' ingresar un email con formato valido')
                                })}
                                onSubmit={(values, formikActions) => {
                                    formikActions.resetForm();
                                }}
                                render={props => <AllyForm {...props} />}
                            />
                        </TextContainer>
                    </ContentContainer>

                </Container>
            </div>
        );
    }
}

export default ComercioEIndustria;