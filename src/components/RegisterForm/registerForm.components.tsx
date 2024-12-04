import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import {IconButton, Paper, Typography} from "@mui/material";
import {Form, FormButton, FormErrorAlert, FormSuccessAlert} from "../Styles/form.styled.tsx";
import TextField from "@mui/material/TextField";
import {FormContainer} from "../Styles/form.styled.tsx";
import CloseIcon from "@mui/icons-material/Close";


type RegisterFormInputs = {
    userName: string;
    email: string;
    password: string;
};

export const RegisterForm = () => {
    const [formError, setFormError] = useState<string | null>(null);
    const [formSuccess, setFormSuccess] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        formState: { errors },
    } = useForm<RegisterFormInputs>({
        mode: "onSubmit",
    });

    const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
        try {
            const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Nepodarilo sa vytvorit pouzivatela');
            }

            setFormSuccess("Pouzivatel vytvoreny");
            reset({
                userName: "",
                email: "",
                password: "",
            });

            const newUser = await response.json();
            console.log(newUser);
        } catch (error: any) {
            setFormError(error.message || 'Neocakavana chyba');
            console.error(error);
        }
    };

    return (
        <FormContainer>
            <Paper variant="outlined">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {formError && (
                        <FormErrorAlert
                            action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => setFormError(null)}>
                                <CloseIcon fontSize="small"/>
                            </IconButton>
                            }
                            ></FormErrorAlert>
                    )}
                    {formSuccess && (
                        <FormSuccessAlert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => setFormSuccess(null)}
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            }
                        >
                            <Typography>{formSuccess}</Typography>
                        </FormSuccessAlert>
                    )}
                    <TextField
                        {...register("userName", {
                            required: "Prosim zadaj pouzivatelske meno", },
                        )}
                        label="Pouzivatelske meno"
                        fullWidth
                        error={!!errors.userName}
                        helperText={errors.userName?.message}
                        margin="normal"
                        onChange={() => {
                            clearErrors("userName");
                            setFormError(null);
                        }}
                    />
                    <TextField
                        {...register("email", {
                            required: "Prosim zadaj emailovu adresu",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Prosim zadaj platnu emailovu adresu",
                            },
                        })}
                        label="Email"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        margin="normal"
                        onChange={() => {
                            clearErrors("email");
                            setFormError(null);
                        }}
                    />
                    <TextField
                        {...register("password", {
                            required: "Prosim zadaj svoje heslo",
                            minLength: {
                                value: 6,
                                message: "Heslo musi byt dlhe aspon 6 znakov",
                            },
                        })}
                        label="Heslo"
                        type="password"
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        margin="normal"
                        onChange={() => {
                            clearErrors("password");
                            setFormError(null);
                        }}
                    />
                    <FormButton type="submit">Registruj</FormButton>
                </Form>
            </Paper>
        </FormContainer>
    );
};
