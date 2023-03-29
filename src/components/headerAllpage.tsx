import Head from "next/head";

interface Props {
  title: string;
  content: string;
}

export default function Headers({ title, content }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
