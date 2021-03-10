import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 40,
    height: 40,
    color: theme.palette.tertiary.main,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        color="inherit"
        href="http://www.facebook.com"
        onClick={handleClick}
        className={classes.link}
      >
        Nosotros
      </Link>
      <Link
        color="inherit"
        href="http://www.instagram.com"
        onClick={handleClick}
        className={classes.link}
      >
        Inicio
      </Link>

      <Link
        color="inherit"
        href="http://www.instagram.com"
        onClick={handleClick}
        className={classes.link}
      >
        Acerca de
      </Link>
    </Breadcrumbs>
  );
}
