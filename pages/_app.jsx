import  Layout  from "../Components/Layout";
import React, { useState, useEffect } from "react";
//import "../styles/globals.css";
import Head from "next/head";
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
