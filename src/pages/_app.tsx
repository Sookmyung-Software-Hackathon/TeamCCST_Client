import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'src/components/common/Layout';
import useWindowSize from 'src/hooks/useWindowSize';
import GlobalStyles from 'src/styles/globalStyle';
import { theme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  const { clientWidth, availableWidth } = useWindowSize();

  return (
    <ThemeProvider theme={{ ...theme, clientWidth, availableWidth }}>
      <GlobalStyles />
      <Head>
        <title>청춘식탁</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
