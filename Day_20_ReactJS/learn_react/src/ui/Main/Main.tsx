import React from "react";
import { SectionHero } from "./SectionHero";
import { SectionServices } from "./SectionServices";
import { SectionProject } from "./SectionProject";
import { SectionExplore } from "./SectionExplore";
import { SectionCta } from "./SectionCta";

export const Main = () => {
  return (
    <main className="content">
      <SectionHero />
      <SectionServices />
      <SectionProject />
      <SectionExplore />
      <SectionCta />
    </main>
  );
};
