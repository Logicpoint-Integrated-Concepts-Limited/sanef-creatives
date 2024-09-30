/* eslint-disable react/no-unescaped-entities */
import parse from 'html-react-parser';

const TeamDetails = ({ image, profile, title, description }) => {
  return (
    <div className="w-full">
      <div className="rounded-3xl py-20 px-10 mb-14 text-center">
        <img src={image} alt="team" className="mx-auto mb-16" loading="lazy" />
        <h2 className="text-main font-black mb-7">{profile}</h2>
        <h1 className="text-x font-semibold mb-20">{title}</h1>
        <p className="text-left text-[2rem] leading-[36px]">
          {parse(description)}
        </p>
      </div>
    </div>
  );
};

export default TeamDetails;
