import Head from 'next/head';

import Form from '../components/Form';

const Eng = () => {
  return (
    <div className="flex justify-center items-center">
      <Head>
        <title>Simple Binary Decoder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form inputType="eng" />
    </div>
  );
};

export default Eng;
