import Head from "next/head";

export default function Helmet({ title }) {
  return (
    <Head>
      <title>{title}|Next-practice</title>
    </Head>
  );
}
