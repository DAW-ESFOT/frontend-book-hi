import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    backgroundColor: "#cfd3d6",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    borderRadius: "10px",
    height: "100px",
  },

  avatar: {
    backgroundColor: "#FE6625",
    color: "#FFFFFF",
  },
  actions: {
    flexGrow: 2,
  },
  cardavatar: {
    position: "relative",

    zIndex: "modal",
  },
}));

const ComCategories = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}

        <Container
          className={classes.cardGrid}
          maxWidth="md"
          style={{ backgroundColor: "#44857D" }}
        >
          {/* End hero unit */}
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid
                item
                key={card}
                xs={12}
                sm={6}
                md={4}
                style={{ backgroundColor: "#44857D" }}
              >
                <Card
                  className={classes.card}
                  style={{ backgroundColor: "#44857D" }}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    style={{ align: "center" }}
                  >
                    <CardActions md={4}>
                      <Button size="small" color="senary">
                        Detalles
                      </Button>
                    </CardActions>
                  </CardMedia>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};
export default ComCategories;
