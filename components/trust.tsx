import Image from "next/image";
import Marquee from "react-fast-marquee";

const TRUST_LOGOS = [
  "/Chrysler.svg",
  "/Honda.svg",
  // "/Hyundai.svg",
  // "/c.svg",
  // "/Jaguar.svg",
  "/Mercedes.svg",
  "/Maybach.svg",
  "/Mitsubishi.svg",
  // "/Renault.svg",
  // "/Tesla.svg",
];

export default function Trust() {
  return (
    <div className="max-w-5xl mx-auto">
      <Marquee autoFill gradient gradientColor="#0f0f0f">
        {TRUST_LOGOS.map((logo, index) => (
          <Image
            key={index}
            width={100}
            height={100}
            src={`/logos/${logo}`}
            alt={`Logo ${index + 1}`}
            className="size-16 me-12"
          />
        ))}
      </Marquee>
    </div>
  );
}
