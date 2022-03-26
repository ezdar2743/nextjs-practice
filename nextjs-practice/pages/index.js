import Link from "next/link";
import Head from "next/head";
import Helmet from "../components/Helmet";
export default function Home() {
  return (
    <>
      <Helmet title="Home" />
      <h1 className="active">Hello</h1>
    </>
  );
}
