import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import "@/styles/globals.css";
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {AuthProvider} from "@/lib/auth";
import theme from './theme';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MyApp(props) {
    const {Component, pageProps} = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <AuthProvider>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Navigation/>
                <Component {...pageProps} />
                <Footer/>
            </ThemeProvider>
        </AuthProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};