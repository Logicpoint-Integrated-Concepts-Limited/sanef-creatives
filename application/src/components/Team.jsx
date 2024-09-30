import { useState } from "react";
import Modal from "./Modal";
import TeamDetails from "./TeamDetails";
import { ShortenSentence } from "../helpers/Functions";

const Team = ({ image, title, description, profile }) => {
  const [details, setDetails] = useState(false);
  const shortDescription = ShortenSentence(description, 200);

  return (
    <>
      <div className="w-[48.5%] t-card">
        <div className="w-full mt-32 shadow-xl team-card bg-[#E6F6EE] rounded-3xl py-20 px-24 h-[35rem] relative">
          <img
            src={image}
            alt="team"
            className="w-[15rem] h-[15rem] shadow-xl rounded-3xl object-cover object-top mx-auto mb-16 center-absolute"
            loading="lazy"
          />

          <div className="mt-40 text-center">
            <h2 className="text-main font-black mb-1">{profile}</h2>
            <h1 className="text-x mb-16 font-semibold">{title}</h1>
            <p className="text-[2rem] text-center leading-[36px] overflow-auto">
              {shortDescription}
            </p>
          </div>
        </div>
      </div>

      <Modal isOpen={details} setIsOpen={setDetails} size="xl">
        <TeamDetails
          image={image}
          title={title}
          description={description}
          profile={profile}
        />
      </Modal>
    </>
  );
};

export default Team;
