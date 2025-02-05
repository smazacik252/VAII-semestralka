import { useState } from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {FormButton, FormContainer, FormErrorAlert, Form, TextFieldStyled} from "../Styles/form.styled.tsx";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../store/userSlice.tsx";

type LoginFormInputs = {
    userName: string;
    password: string;
};


export const LoginForm = () => {

    const dispatch = useDispatch();
    const [formError, setFormError] = useState<string | null>(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        mode: "onSubmit",
    });

    const onSubmit : SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            const response = await fetch('http://localhost:8000/users/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message || "Prihlasenie sa nepodarilo");
            }

            dispatch(
                login({response: responseData.user})
            );
            console.log(responseData.user);
            setFormError(null);
            navigate("/");
        } catch (error: any) {
            setFormError(error.message);

        }
    }

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {formError && (
                    <FormErrorAlert
                        severity="error"
                        action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => setFormError(null)}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                    >
                        {formError}
                    </FormErrorAlert>
                )}
                <TextFieldStyled
                    {...register("userName", {
                        required: "Prosim zadajte pouzivatelske meno",
                    })}
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
                <TextFieldStyled
                    {...register("password", {
                        required: "Prosim zadajte heslo",
                    })}
                    label="Password"
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
                <FormButton type="submit">
                    Prihlasit
                </FormButton>
            </Form>
        </FormContainer>
    );
}