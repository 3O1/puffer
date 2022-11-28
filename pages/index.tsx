import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '../components/footer';

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('sign up');
  const [submitted, setSubmitted] = useState(false);
  const [placeholder, setPlaceholder] = useState('email@domain.com');

  function handleEmail() {
    if (email.length > 0) {
      if (email.includes('@') && email.includes('.')) {
        console.log('valid');
        // sendEmail(email);
        setSubmitted(true);
        setEmail('');
        setButtonText('submitted');
        setPlaceholder('thank you');
      } else {
        alert('Please enter a valid email');
        setEmail('');
      }
    }
  }

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
          content="https://puffer-la.s3.us-west-1.amazonaws.com/PufferThumbnail.png"
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
          content="https://puffer-la.s3.us-west-1.amazonaws.com/PufferThumbnail.png"
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

              <div className="pt-12 md:pt-0">
                <div>
                  <h2 className="italic text-xxs">
                    Be the first to know about upcoming drops.
                  </h2>
                  <input
                    type="text"
                    className="h-8 p-2 mt-2 text-xs bg-white border border-black outline-none w-72"
                    name=""
                    placeholder={placeholder}
                    id=""
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    onKeyDown={(e) => {
                      e.key === 'Enter' ? handleEmail() : null;
                    }}
                    disabled={submitted}
                  />
                  <div className="flex justify-center ">
                    <div
                      className={`${
                        submitted ? 'bg-green-600' : 'bg-black'
                      }  'h-8 mt-2 text-left w-72 hover:opacity-95'`}
                    >
                      <button
                        className="h-8 px-2 text-xs text-white"
                        onClick={handleEmail}
                        disabled={submitted}
                      >
                        {/* sign up */}
                        <div className="flex items-center justify-between w-72">
                          <h2>{buttonText}</h2>
                          <svg
                            // className="mr-5"
                            className={`${
                              submitted ? 'opacity-0 mr-5' : 'opacity-100 mr-5'
                            }  ''`}
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.59184 9L3.57726 7.97321L6.24053 5.25446H0V3.74554H6.24053L3.57726 1.03125L4.59184 0L9 4.5L4.59184 9Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
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
