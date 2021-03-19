import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

// import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}
export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter()
  const [isFirstMount, setIsFirstMount] = React.useState(true);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component
          isFirstMount={isFirstMount}
          key={router.route}
          {...pageProps}
        />
      </AnimatePresence>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
