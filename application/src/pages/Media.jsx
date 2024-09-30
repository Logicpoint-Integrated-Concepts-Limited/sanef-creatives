/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Gallery, News } from "../components";

import { useState } from "react";

const Media = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = parseInt(searchParams.get("tab")) || 0;
  const [selectedTab, setSelectedTab] = useState(tab);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
    setSearchParams({ tab: index });
  };
  return (
    <>
      <section className="section__hero-teams bg-black py-48" id="teams">
        <div className="sanef-wrap">
          <h1 className="text-xl text-white font-extrabold mb-4">Media</h1>
          <p className="text-main text-white w-[70%] font-medium">
            Read and explore the future of business, entertainment, arts and
            culture.
          </p>
        </div>
      </section>

      <section className="section__content-media bg-[#E7F3ED] section-padding mb-0">
        <div className="sanef-wrap">
          <Tabs defaultIndex={tab} onSelect={handleTabSelect}>
            <TabList className="flex items-center justify-center gap-10 mb-28">
              <Tab>News</Tab>
              <Tab>Gallery</Tab>
            </TabList>

            <TabPanel>
              <h1 className="text-base font-semibold mb-16">
                Read all about Us
              </h1>
              <News />
            </TabPanel>
            <TabPanel>
              <h1 className="text-base font-semibold mb-16">
                Pictures are worth a thousand words
              </h1>
              <Gallery />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Media;
