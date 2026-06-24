import HeroBanner from "../components/HeroBanner";
import { ashLivingPages } from "./data/ashLivingPages";

export default function AshLiving() {
  return (
    <>
      {ashLivingPages.map((item, index) => (
        <HeroBanner
          key={index}
          image={item.image}
          subtitle={item.subtitle}
          title={item.title}
          description={item.description}
          buttonText={item.buttonText}
          path={item.path}
          dark={item.dark}
        />
      ))}
    </>
  );
}
