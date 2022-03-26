import Layout from "../components/Layout";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
