import Head from 'next/head';

import Form from '../components/Form';

export default function HomePage() {
  return (
    <div className="flex justify-center items-center">
      <Head>
        <title>Simple Binary Decoder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form inputType="bi" />
      </main>
    </div>
  );
}
