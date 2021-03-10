import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { Box, Divider } from "@material-ui/core";
import Routes from "../constants/routes";
import { Link as MuiLink } from "@material-ui/core";
import Image from "next/image";
import RedSocial from "@/components/RedSocial";
import Menufooter from "@/components/Menufooter";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link href="https://material-ui.com/">

      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    //backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    backgroundColor: "#003D59",
    color: "#44857D",
  },
  root: {
    flexGrow: 1,
    display: "flex",
    alignContent: "center",
    padding: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    alignItems: "center",
    alignContent: "right",
    color: theme.palette.text.secondary,
    background: "#003D59",
  },
  logo: {
    color: "#44857D",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid
            container
            direction="col"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Box className={classes.logo}>
              <Link href={Routes.HOME} passHref>
                <MuiLink>
                  <Image src="/logo.png" width={200} height={60} />
                </MuiLink>
              </Link>
            </Box>
            <Grid />
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Container maxWidth="lg">
              <Menufooter />
            </Container>
            <Grid />
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <RedSocial />

            <Grid />
          </Grid>
        </div>
      </Container>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Copyright />
        </Container>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
