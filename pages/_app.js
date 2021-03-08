import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css"

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <meta name="msapplication-TileColor" content="#b91d47" /> */}
        {/* <meta name="theme-color" content="#fafafa" /> */}
      </Head>
      {/* <ThemeProvider theme={theme}> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
