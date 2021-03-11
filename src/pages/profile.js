import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import styles from "@/styles/Profile.module.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BusinessIcon from '@material-ui/icons/Business';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import { fetcher } from "@/lib/utils";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import useSWR from 'swr';
import withAuth from "../hocs/withAuth";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Profile = () => {
    const router = useRouter();
    const { userId } = router.query;
    const { data, error } = useSWR(`/user`, fetcher);
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    console.log('user', userId)

    if (error) return <div>No se pudo cargar la información del usuario</div>;
    if (!data) return <Loading />;
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

  return (
    <Container className={styles.container}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
            <div className={classes.root}>
              <Avatar className={styles.avatar} alt="Remy Sharp" src="https://static.thenounproject.com/png/363640-200.png" />
              <h3 className = {styles.text}>{data.user.name}</h3>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem
                  button
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                <ListItemText primary="Mi Perfil" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemIcon>
                    <LibraryBooksIcon />
                  </ListItemIcon>
                <ListItemText primary="Mis Libros" />
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemIcon>
                    <BusinessIcon />
                  </ListItemIcon>
                <ListItemText primary="Mi Negocio" />
              </ListItem>
            </List>
          <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItem
                button
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
              </ListItem>
            </List>
        </div>
            </Grid>
            <Grid item xs={9}>
                <h1>{data.user.name}</h1>
            </Grid>
          </Grid> 
    </Container>
  );
};

export default withAuth(Profile)