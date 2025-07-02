import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rendez-vous Fast Car</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Fast Car Ladies & Gentlemen</h1>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=your_map_id_here"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
        <p className="mt-4">
          Benvenuti all&apos;evento. Presto riceverete notifiche in tempo reale!
        </p>
      </main>
    </>
  );
}