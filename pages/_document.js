import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import settings from "util/settings";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang={settings.language}>
        <Head>
          <title>{settings.siteName}</title>
          <meta name="description" content={settings.description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=ISO-8859-1"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
