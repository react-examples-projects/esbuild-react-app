import { Helmet } from "react-helmet";

export default function PageInfo({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} » Ricky y Morty</title>
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}
