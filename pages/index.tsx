import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="">
          {/* test */}
          {/* <svg
          width="134"
          height="85"
          viewBox="0 0 134 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask"></mask>
          <path
            d="M24.1218 41.9688L42.0931 59.8635L60.0644 41.9688L42.0931 24.074L24.1218 41.9688Z"
            fill="#0F0F0F"
          />
          <path
            d="M48.8335 66.5743L66.8048 84.4691L84.776 66.5743L66.8048 48.6796L48.8335 66.5743Z"
            fill="#0F0F0F"
          />
          <path
            d="M97.7185 67.1053L115.69 85.0001L133.661 67.1053L115.69 49.2106L97.7185 67.1053Z"
            fill="#0F0F0F"
          />
          <path
            d="M48.2993 17.8945L66.2706 35.7893L84.2419 17.8945L66.2706 -0.000225709L48.2993 17.8945Z"
            fill="#0F0F0F"
          />
          <path
            d="M73.0076 42.4996L90.9788 60.3944L108.95 42.4996L90.9788 24.6049L73.0076 42.4996Z"
            fill="#0F0F0F"
          />
          <path
            d="M0 65.9865L17.9713 83.8812L35.9425 65.9865L17.9713 48.0917L0 65.9865Z"
            fill="#0F0F0F"
          />
        </svg> */}
          {/* <video autoPlay loop muted>
          <source src="puffer.mp4" type="video/mp4" width={50} height={50} />
          Your browser does not support the video tag.
        </video> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
