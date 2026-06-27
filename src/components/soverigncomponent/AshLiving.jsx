// AshLiving.jsx
// Usage:
//   <AshLiving isDark={true}  />  → white card, black text  (default)
//   <AshLiving isDark={false} />  → #080808 card, white text

import HeroBanner from "./HeroBanner";
import HeroCard from "../card/HeroCard";
import { ashLivingPages } from "../data/ashLivingPages";

export default function AshLiving({ isDark = true }) {
  const sovereignSpace = ashLivingPages[0];
  const otherCards     = ashLivingPages.slice(1);

  return (
    <>
      {/* Sovereign Space */}
      <HeroBanner {...sovereignSpace} isDark={isDark} />

      {/* Remaining Cards */}
      <section className="px-3 sm:px-5 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherCards.map((item, index) => {
              const isLastOdd =
                otherCards.length % 2 !== 0 && index === otherCards.length - 1;

              return (
                <div
                  key={index}
                  className={`w-full ${
                    isLastOdd ? "lg:col-span-2 flex justify-center" : ""
                  }`}
                >
                  <div className="w-full max-w-[700px]">
                    <HeroCard {...item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
