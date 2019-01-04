/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const style = {
  margin: 0,
  backgroundColor: '#f3f3f3',
  font: '16px/1.45 "Nunito", sans-serif',
  overflowX: 'hidden',
  color: 'black',
};

class AppDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <title>Creative Conners Link Shortener</title>
          <meta
            name="description"
            content="cci.fyi is Creative Conners URL Shortener based on the Kutt.it project"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,400,700"
            rel="stylesheet"
          />
          <link rel="icon" sizes="300x300" href="/images/favicon-300x300.png" />
          <link rel="icon" sizes="180x180" href="/images/favicon-180x180.png" />
          <link rel="icon" sizes="81x81" href="/images/favicon-81x81.png" />
          <link rel="apple-touch-icon" href="/images/favicon-300x300.png" />

          <meta property="og:url" content="http://cci.fyi" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Creative Conners" />
          <meta property="og:description" content="Creative Conners URL Shortener" />
          <meta name="twitter:url" content="http://cci.fyi" />
          <meta name="twitter:title" content="Creative Conners" />
          <meta name="twitter:description" content="Creative Conners URL Shortener" />

          {this.props.styleTags}

          <script
            dangerouslySetInnerHTML={{
              __html: `window.recaptchaCallback = function() { window.isCaptchaReady = true; }`,
            }}
          />

          <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer />
          <script src="/analytics.js" />
        </Head>
        <body style={style}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default AppDocument;
