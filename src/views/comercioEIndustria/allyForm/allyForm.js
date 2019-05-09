import React from 'react';
import {Form} from "formik";
import SubmitError from "../../../components/form/submitError/submitError";
import FormGroup from "../../../components/form/formGroup/formGroup";
import Input from "../../../components/form/input/input";
import ValidationError from "../../../components/form/validationError/validationError";
import Button from "../../../components/Button/Button";
import isEmpty from 'lodash.isempty';
import styled from "styled-components";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";

const FormTitle = styled.h3`
  color: ${props => props.theme.secondary};
  margin-bottom: 20px;
`;

const AllyForm = ({ errors, isSubmitting, dirty, touched, match, submitState, message }) => {
    return (
        <Form style={{marginTop: '30px', width: '300px'}}>
            <FormTitle>Contáctenos para ser Aliados</FormTitle>
            {
                submitState && (<SubmitError error={submitState}>{ message }</SubmitError>)
            }
            {
                isSubmitting && <SpinnerLoading/>
            }
            <FormGroup>
                <Input
                    type={'text'}
                    name={'name'} invalid={errors.name && touched.name ? 1 : 0}
                    placeholder={'Nombre o Razón Social'}
                />
                <ValidationError name={'name'}/>
            </FormGroup>

            <FormGroup>
                <Input
                    type={'text'}
                    name={'identification'} invalid={errors.identification && touched.identification ? 1 : 0}
                    placeholder={'Cédula o RIF'}
                />
                <ValidationError name={'identification'}/>
            </FormGroup>

            <FormGroup>
                <Input
                    type={'text'}
                    name={'phone'} invalid={errors.phone && touched.phone ? 1 : 0}
                    placeholder={'Telefono'}
                />
                <ValidationError name={'phone'}/>
            </FormGroup>

            <FormGroup>
                <Input
                    type={'text'}
                    name={'email'} invalid={errors.email && touched.email ? 1 : 0}
                    placeholder={'Email'}
                />
                <ValidationError name={'email'}/>
            </FormGroup>

            <Button type={'submit'}
                    disabled={isSubmitting || !isEmpty(errors) || !dirty}
            >
                Enviar
            </Button>
        </Form>
    );
};

export default AllyForm;
