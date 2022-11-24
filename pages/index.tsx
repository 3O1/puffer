import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div>
      {/* head */}
      <Head>
        <title>Puffer</title>
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

      {/* main content */}
      <main>
        <div className="h-screen ">
          <div className="flex items-center justify-center h-1/2 md:h-full">
            <video autoPlay loop muted playsInline height={200} width={200}>
              <source src="puffer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex items-end select-none font-courierPrime h-1/2 md:h-auto">
            <div className="bottom-0 items-end justify-between w-full px-5 mb-12 text-center lg:mb-14 md:fixed md:px-8 lg:px-12 xl:px-14 md:flex md:text-sm md:text-left">
              <div className="md:w-96">
                <h2 className="text-sm italic font-courierPrime">
                  LOS ANGELES
                </h2>
                <h2 className="pt-1 text-2xl md:text-xl bold font-courierPrime">
                  [PUFFER]
                </h2>
                <h2 className="pt-8 text-xs md:pt-4 font-courierPrime">
                  “Lorem ipsum dolor sit amet consectetur. Dapibus in arcu
                  turpis mattis quis in massa ut. Id egestas viverra auctor at.
                  Quam interdum auctor tristique tellus id ut ultrices mattis.
                  Sit in dolor nisi et.”
                </h2>
              </div>

              <div>
                <h2 className="pt-10 text-sm font-bold md:pt-0 font-courierPrime">
                  probably nothing.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
