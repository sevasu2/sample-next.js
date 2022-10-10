import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Container from "../components/container";
import Meta from "../components/meta";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしてください" imageOn />
    </Container>
  );
}
