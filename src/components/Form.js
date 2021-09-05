import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("El nombre es requerido y tener a lo menos dos caracteres!");
        } else if (e.target.value.length > 2) {
            setFirstNameError("");
        }
    }
    const validateLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("El apellido es requerido y tener a lo menos dos caracteres!");
        } else if (e.target.value.length > 2) {
            setLastNameError("");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("El correo es requerido y tener a lo menos cinco caracteres!");
        } else if (e.target.value.length > 5) {
            setEmailError("");
        }
    }

    const validatePass = (e) => {
        setPass(e.target.value);
        if (e.target.value.length == 0) {
            setPassError("La contraseña es requerida!");
        } else {
            setPassError("");
        }
    }

    const validateConfirmPass = (e) => {
        setConfirmPass(e.target.value);
        if (e.target.value.length == 0) {
            setConfirmPassError("La contraseña es requerida!");
        } else if (e.target.value != pass) {
            setConfirmPassError("Las contraseñas deben coincidir!");
        } else if (e.target.value == pass) {
            setConfirmPassError("");
        }
    }


    return (
        <>
            <h1>Formulario con Validaciones</h1>
            <Form>
                <FormGroup>
                    <Label for="firstName">Nombre</Label>
                    <Input type="text" name="firstName" id="firstName"
                        placeholder="ingrese..." onChange={validateFirstName} />
                    {
                        firstNameError ? <p style={{ color: 'red' }}>{firstNameError}</p> : ''
                    }
                </FormGroup>

                <FormGroup>
                    <Label for="lastName">Apellido</Label>
                    <Input type="text" name="lastName" id="lastName"
                        placeholder="ingrese..." onChange={validateLastName} />
                    {
                        lastNameError ? <p style={{ color: 'red' }}>{lastNameError}</p> : ''
                    }
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail"
                        placeholder="ingrese..." onChange={validateEmail} />
                    {
                        emailError ? <p style={{ color: 'red' }}>{emailError}</p> : ''
                    }
                </FormGroup>

                <FormGroup>
                    <Label for="pass">Contraseña</Label>
                    <Input type="password" name="pass" id="pass"
                        placeholder="inhgrese..." onChange={validatePass} />
                    {
                        passError ? <p style={{ color: 'red' }}>{passError}</p> : ''
                    }
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPass">Confirmar contraseña</Label>
                    <Input type="password" name="confirmPass" id="confirmPass"
                        placeholder="ingrese..." onChange={validateConfirmPass} />
                    {
                        confirmPassError ? <p style={{ color: 'red' }}>{confirmPassError}</p> : ''
                    }
                </FormGroup>

                <Button>Enviar</Button>
            </Form>
        </>
    );
};

export default UserForm;
