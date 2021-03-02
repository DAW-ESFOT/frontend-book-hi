import React from "react";
import {useForm} from "react-hook-form";
import withoutAuth from "@/hocs/withoutAuth";
import {useAuth} from "@/lib/auth";
import styles from "@/styles/Login.module.css";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from "@material-ui/core/Divider";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("Ingrese su nombre"),
    lastName: yup.string().required("Ingrese su apellido"),
    email: yup
        .string()
        .email("Ingrese un email válido")
        .required("Ingrese su email."),
    password: yup.string().required("Ingrese su contraseña"),
    confirmPassword: yup.string().required("Confirme su contraseña"),
});

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const Register = () => {
    const {register: doRegister} = useAuth();
    const classes = useStyles();
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const userData = await doRegister({...data, role: "ROLE_USER"});

            console.log("userData", userData);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                alert(error.response.message);
                console.log(error.response);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    };
    return (

        <Container component="main" maxWidth="xs" className={styles.container}>
            <CssBaseline/>
            <div className={classes.paper}>
                <Grid container style={{paddingTop: "30px"}}>
                    <Grid item xs={6}>
                        <Typography>¿Ya tienes una cuenta?</Typography>
                    </Grid>
                    <Grid item xs={6} style={{textAlign: "end"}}>
                        <Link href="/login" variant="body2" color="secondary">
                            {"Inicia Sesión"}
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider color="secondary"/>
                    </Grid>
                </Grid>
                <Grid style={{paddingTop: "30px"}}>
                    <Typography component="h1" variant="h5">
                        Iniciar Sesión
                    </Typography>
                </Grid>
                <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                inputRef={register}
                                label="Nombre"
                                autoFocus
                            />
                            <Typography color="primary">{errors.firstName?.message}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                inputRef={register}
                                label="Apellido"
                                name="lastName"
                                autoComplete="lname"
                            />
                            <Typography color="primary">{errors.lastName?.message}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                inputRef={register}
                                label="Correo"
                                name="email"
                                autoComplete="email"
                            />
                            <Typography color="primary">{errors.email?.message}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                inputRef={register}
                                autoComplete="current-password"
                            />
                            <Typography color="primary">{errors.password?.message}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirmar Contraseña"
                                type="password"
                                id="confirmPassword"
                                inputRef={register}
                                autoComplete="current-password"
                            />
                            <Typography color="primary">{errors.confirmPassword?.message}</Typography>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Registrar
                    </Button>
                </form>
            </div>
            <Box mt={5} style={{paddingBottom: "30px"}}>
                <Typography variant="body2" color="textSecondary" align="center">
                    Al registrarse acepta todos los Términos de uso y Políticas de Privacidad
                </Typography>
            </Box>
        </Container>

    );
};

export default withoutAuth(Register);
