/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { If } from "../helpers/Functions";
import { Team } from "../components";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Banks, TeamData, TeamData2 } from "../helpers/Constant";

const Teams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = parseInt(searchParams.get("tab")) || 0;
  const [selectedTab, setSelectedTab] = useState(tab);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
    setSearchParams({ tab: index });
  };

  const hasTeamData = TeamData && TeamData.length > 0;

  const lastElement = hasTeamData ? TeamData[TeamData.length - 1] : null;

  const restElements = TeamData2 || [];

  return (
    <>
      <section className="section__hero-teams pt-40" id="teams">
        <div className="sanef-wrap">
          <h1 className="text-xl font-semibold mb-24">Our Team</h1>
        </div>
      </section>

      <section
        className="section__teams bg-[#F9F9F9] section-padding z-50"
        id="board-members"
      >
        <div className="sanef-wrap">
          <Tabs defaultIndex={tab} onSelect={handleTabSelect}>
            <TabList className="flex items-center gap-10 mb-28">
              <Tab>Board Members</Tab>
              <Tab>Management Team</Tab>
            </TabList>

            <TabPanel className="flex gap-10 gap-y-40 flex-wrap justify-center">
              <If condition={TeamData && TeamData.length > 0}>
                {TeamData?.map((el, ind) => (
                  <Team
                    key={ind}
                    title={el.title}
                    description={el.description}
                    profile={el.profile}
                    image={el.image}
                  />
                ))}
              </If>
            </TabPanel>
            <TabPanel className="flex flex-col items-center gap-10 gap-y-40">
              {hasTeamData && (
                <>
                  {lastElement && (
                    <div className="w-full flex justify-center">
                      <Team
                        title={lastElement.title}
                        description={lastElement.description}
                        profile={lastElement.profile}
                        image={lastElement.image}
                      />
                    </div>
                  )}

                  <div className="w-full flex flex-wrap justify-between gap-10 gap-y-40">
                    {restElements.map((el, ind) => (
                      <Team
                        key={ind}
                        title={el.title}
                        description={el.description}
                        profile={el.profile}
                        image={el.image}
                      />
                    ))}
                  </div>
                </>
              )}
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Teams;

const Committee = ({ bankImg, name }) => {
  return (
    <div className="w-[20%] bankCard flex flex-col justify-center items-center">
      <div className="bg-white h-[24rem] w-[24rem] rounded-full flex items-center justify-center shadow-lg mb-16">
        <img loading="lazy" src={bankImg} alt={`${name}`} className="w-1/2" />
      </div>
      <p className="text-x font-medium capitalize">{name}</p>
    </div>
  );
};
