import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Link as MuiLink } from "@material-ui/core";
import Link from "next/link";
import ComCategories from "@/components/ComCategories";
const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  main: {
    padding: 20,
  },
  fontCategories: {
    background: "#44857D",
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <React.Fragment>
      <main>
        <div>
          <CssBaseline />
          <Container
            maxWidth="md"
            component="main"
            className={classes.fontCategories}
          >
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent className={classes.fontCategories}>
                  <Typography
                    variant="subtitle1"
                    color="quinary"
                    style={{ fontSize: "22px" }}
                  >
                    <Link href="'/inicio">
                      <MuiLink>Categorias</MuiLink>
                    </Link>
                  </Typography>
                </CardContent>

                <ComCategories />
              </div>
            </Card>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};

export async function getStaticProps() {
  const res = await axios.get("/books");
  const data = await res.json();

  const books = data.data;

  return {
    props: {
      books,
    },
  };
}
