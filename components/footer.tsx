import Link from 'next/link';
import Image from 'next/image';

const Footer = () => (
  <div>
    <div className="fixed bottom-0 w-full">
      <div className="grid h-3 grid-cols-6">
        <div className="bg-pufferBlue"> </div>
        <div className="bg-pufferPink"></div>
        <div className="bg-pufferYellow"></div>
        <div className="bg-pufferOrange"></div>
        <div className="bg-pufferRed"></div>
        <div className="bg-pufferGreen"></div>
      </div>
    </div>
  </div>
);

export default Footer;
