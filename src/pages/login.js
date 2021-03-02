import {useAuth} from "@/lib/auth";
import withoutAuth from "@/hocs/withoutAuth";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "@/styles/Login.module.css";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Ingrese un email válido")
        .required("Ingrese su email."),
    password: yup.string().required("Ingrese su clave"),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const {login} = useAuth();
    const classes = useStyles();
    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        console.log("data", data);
        try {
            const userData = await login(data);

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
                    <Grid item xs={9}>
                        <Typography>¿Todavía no tienes una cuenta?</Typography>
                    </Grid>
                    <Grid item xs={3} style={{textAlign: "end"}}>
                        <Link href="/register" variant="body2" color="secondary">
                            {"Regístrate"}
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
                <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)} style={{paddingBottom:"30px"}}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        inputRef={register}
                        label="Correo"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <Typography color="primary">{errors.email?.message}</Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Iniciar Sesión
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Olvidaste tu contraseña?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>

    );
};

export default withoutAuth(Login);
