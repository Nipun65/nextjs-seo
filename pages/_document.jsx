import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const RootLayout = {
    metadata: {
      title: 'The Office',
      description:
        'Details of The Office characters -- Exploring the Characters of Dunder Mifflin',
    },
  };

  return (
    <Html lang='en'>
      <Head>
        <title>{RootLayout.metadata.title}</title>
        <meta name='description' content={RootLayout.metadata.description} />
        <meta charSet='UTF-8' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Kanit:wght@300&family=Nunito+Sans:wght@300&family=Roboto:wght@100&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
