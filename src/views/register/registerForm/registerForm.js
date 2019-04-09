import React from 'react';
import {Form} from "formik";
import idx from "idx.macro";
import Input from "../../../components/form/input/input";
import FormGroup from "../../../components/form/formGroup/formGroup";
import Label from "../../../components/form/label/label";
import ValidationError from "../../../components/form/validationError/validationError";
import InlineInputs from "../../../components/form/inlineInputs/inlineInputs";
import isEmpty from "lodash.isempty";
import SpinnerLoading from "../../../components/spinnerLoading/spinnerLoading";
import SubmitError from "../../../components/form/submitError/submitError";
import Button from "../../../components/Button/Button";

const RegisterForm = ({ errors, isSubmitting, dirty, touched, status }) => {

    const identificationTypeErrors = idx(errors, _ => _.identification.type);
    const identificationTypeTouched = idx(touched, _ => _.identification.type);

    const identificationNumberErrors = idx(errors, _ => _.identification.number);
    const identificationNumberTouched = idx(touched, _ => _.identification.number);

    return (
        <Form>

            {
                !isSubmitting && !isEmpty(status) && (<SubmitError error={status.type}>{status.message}</SubmitError>)
            }

            {isSubmitting && <SpinnerLoading/>}

            <FormGroup>
                <Label>Nombre o Razón Social</Label>
                <Input
                    type={"text"}
                    name={"name"}
                    invalid={errors.name && touched.name ? 1 : 0 }
                />
                <ValidationError name={"name"}/>
            </FormGroup>

            <FormGroup>
                <Label>Cedula</Label>
                <InlineInputs>
                    <Input
                        component={"select"}
                        width={"15"}
                        name={"identification.type"}
                        invalid={identificationTypeErrors && identificationTypeTouched ? 1 : 0}
                    >
                        <option value="V">V</option>
                        <option value="J">J</option>
                        <option value="G">G</option>
                        <option value="E">E</option>
                        <option value="P">P</option>
                    </Input>
                    <p>-</p>
                    <Input
                        type={"text"}
                        width={"80"}
                        name={"identification.number"}
                        invalid={identificationNumberErrors && identificationNumberTouched ? 1 : 0}
                    />
                </InlineInputs>
                <ValidationError name={"identification.type"}/>
                <ValidationError name={"identification.number"}/>
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
                <Label>Nombre de usuario</Label>
                <Input
                    type={"text"}
                    name={"username"}
                    invalid={errors.username && touched.username ? 1 : 0}
                />
                <ValidationError name={"username"}/>
            </FormGroup>

            <FormGroup>
                <Label>Contraseña</Label>
                <Input
                    type={"password"}
                    name={"password"}
                    invalid={errors.password && touched.password ? 1 : 0}
                />
                <ValidationError name={"password"}/>
            </FormGroup>

            <Button type={"submit"} disabled={isSubmitting || !isEmpty(errors) || !dirty}>Registrarse</Button>
        </Form>
    );
};

export default RegisterForm;
