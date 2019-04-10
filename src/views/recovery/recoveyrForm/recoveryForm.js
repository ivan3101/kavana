import React from 'react';
import {Form} from "formik";
import isEmpty from "lodash.isempty";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import FormGroup from "../../../components/form/formGroup/formGroup";
import Label from "../../../components/form/label/label";
import ValidationError from "../../../components/form/validationError/validationError";
import Input from "../../../components/form/input/input";
import Button from "../../../components/Button/Button";
import SubmitError from "../../../components/form/submitError/submitError";

const RecoveryForm = ({ errors, isSubmitting, dirty, touched, status }) => {
    return (
        <Form>
            {
                !isSubmitting && !isEmpty(status) && (<SubmitError error={status.type}>{status.message}</SubmitError>)
            }

            {isSubmitting && <SpinnerLoading/>}

            <FormGroup>
                <Label>Nombre de usuario</Label>
                <Input
                    type={"text"}
                    name={"username"}
                    invalid={errors.username && touched.username ? 1 : 0}
                />
                <ValidationError name={"username"}/>
            </FormGroup>

            <FormGroup>
                <Label>Correo electronico</Label>
                <Input
                    type={"email"}
                    name={"email"}
                    invalid={errors.email && touched.email ? 1 : 0}
                />
                <ValidationError name={"email"}/>
            </FormGroup>

            <FormGroup>
                <Label>Nueva Contraseña</Label>
                <Input
                    type={"password"}
                    name={"password"}
                    invalid={errors.password && touched.password ? 1 : 0}
                />
                <ValidationError name={"password"}/>
            </FormGroup>

            <Button type={"submit"} disabled={isSubmitting || !isEmpty(errors) || !dirty}>Recuperar</Button>
        </Form>
    );
};

export default RecoveryForm;
