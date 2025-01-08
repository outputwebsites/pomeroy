import Image from "next/image";
import Link from "next/link";
import Card from "../Card";
import { ServiceAreas } from "../../data";

const CardArea = (): JSX.Element => {
  const linkBase = process.env.NEXT_PUBLIC_DOMAIN_URL || "";

  return (
    <Card className="my-20">
      <div className="flex flex-row max-[682px]:flex-col gap-2 max-[682px]:gap-6 text-center items-center justify-center">
        <Image
          src="/areaclean.svg"
          width={150}
          height={150}
          alt=""
        />
        <div className="shrink text-left max-[682px]:text-center">
          <p className="font-normal text-xl lg:text-3xl">We Serve <Link href={linkBase + "/appraisal-residential" || "./appraisal-residential"} title="Get a Residential Appraisal"><strong>Residential</strong></Link> and <Link href={linkBase + "/appraisal-commercial" || "./appraisal-commercial"} title="Get a Commercial Appraisal"><strong>Commercial</strong></Link> Properties</p>
          <ul className="mt-4 text-2xl text-center flex flex-col md:flex-row gap-4 list-none">
            {ServiceAreas.map((area, index) => (
              <li key={index} className="p-2 bg-gray-200">{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default CardArea;