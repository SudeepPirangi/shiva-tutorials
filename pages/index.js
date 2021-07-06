import Head from "next/head";
import {
  CssBaseline,
  Typography,
  Button,
  Link,
  Slider,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Vision from "../components/Vision";
import Expertise from "../components/Expertise";
import AboutUs from "../components/AboutUs";
import DarkTheme from "../styles/DarkTheme";

export default function Home() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Head>
        <title>Shiva Tutorials</title>
        <meta name="description" content="A website for Shiva's Tutorial" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Akaya%20Kanadaka&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Courgette&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Bona%20Nova&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main>
        <Hero />
        <section className="floating-section" id="vision">
          <Vision />
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section id="contactus">
          <AboutUs />
        </section>
      </main>

      <Footer />
    </ThemeProvider>
  );
}
