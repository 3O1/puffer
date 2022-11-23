import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meetz</title>
        <meta
          name="description"
          content="The official website of Puffer, a y00ts club."
        />

        <meta property="og:title" content="Puffer" />
        <meta
          property="og:image"
          content="https://meetz-media-downloads.s3.amazonaws.com/meetz_app_icon.png"
        />
        <meta
          property="og:description"
          content="The official website of Puffer, a y00ts club."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@PufferDAO" />
        <meta name="twitter:title" content="Puffer" />
        <meta
          name="twitter:description"
          content="The official website of Puffer, a y00ts club."
        />
        <meta
          name="twitter:image"
          content="https://meetz-media-downloads.s3.amazonaws.com/meetz_app_icon.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center h-screen">
        <div className="">
          <video autoPlay loop muted playsInline>
            <source src="puffer.mp4" type="video/mp4" width={50} height={50} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
