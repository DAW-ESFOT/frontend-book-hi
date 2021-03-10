import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
    height: "300px",
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
    top: "-115%",
    zIndex: "modal",
  },
}));

const cardview = () => {
  const classes = useStyles();
  const cards = [1, 2, 3];
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    style={{ position: "relative" }}
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  >
                    <CardHeader
                      style={{ color: "#FE6625" }}
                      className={classes.cardavatar}
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          D
                        </Avatar>
                      }
                      title="Disponible"
                    />
                  </CardMedia>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Titulo del libro
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h5">
                      Autor
                    </Typography>

                    <Typography>Precio</Typography>
                  </CardContent>
                  <CardActions md={4}>
                    <Button
                      size="small"
                      color="senary"
                      style={{ float: "right" }}
                    >
                      Detalles
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        color: "#003D59",
                        backgroundColor: "#F8BF0C",
                        float: "right",
                      }}
                    >
                      Contactar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};
export default cardview;
