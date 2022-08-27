import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'src/styles/globalStyle';
import { theme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>Drag Me</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
