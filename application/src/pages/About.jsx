/* eslint-disable no-irregular-whitespace */
import { If } from "../helpers/Functions";
/* eslint-disable react/no-unescaped-entities */
import { Banks } from "../helpers/Constant";

const About = () => {
  return (
    <>
      <section className="section__committee-about bg-[#FFF8F1] section-padding relative z-30">
        <div className="sanef-wrap">
          <div className="flex flexCol">
            <div className="inline-block mb-56 flex-1">
              <h1 className="text-x2 font-bold mb-2">
                About Bankers' Committee
              </h1>
              <div className="flex items-start justify-start">
                <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
              </div>
            </div>
            <p className="flex-1 text-[2rem] leading-[36px]">
              The Bankers’ Committee is composed of the Central Bank of Nigeria
              (CBN) and the Body of Banks
            </p>
          </div>
          <div className="flex gap-10 gap-y-40 flex-wrap w-[92%] mx-auto mt-6 justify-between">
            <If condition={Banks && Banks.length > 0}>
              {Banks?.map((el, ind) => (
                <Committee key={ind} bankImg={el.bank} name={el.name} />
              ))}
            </If>
          </div>
        </div>
      </section>

      <section className="section__photo-about -z-10">
        <img
          loading="lazy"
          src={
            "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1727160935/Updated%20Website%20Assets/About%20Us%20-%20National%20theatre%20Photo/About_Us_Page_-_National_Theatre_gcyc4s.jpg"
          }
          alt="About image"
          className="w-full h-[100rem] object-cover object-top"
        />
      </section>

      <section className="section__about-about section-padding" id="about">
        <div className="sanef-wrap">
          <div className="flex flexCol">
            <div className="inline-block mb-40 flex-1">
              <h1 className="text-xl font-black flex-1">
                About SANEF <br /> Creatives Limited
              </h1>
              {/* <div className="flex items-start justify-start">
                <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-10"></div>
              </div> */}
            </div>
            <p className="flex-1 text-[2rem] leading-[36px]">
              SANEF Creatives Limited is a special purpose vehicle of the
              Bankers' Committee. Established in December 2019, we are a
              specialized entity committed to advancing the core initiatives of
              the banks in Nigeria.
              <br />
              <br /> Since inception, we have been dedicated to driving
              transformative change and fostering creative excellence, which is
              reflected in the completion of projects such as the restoration of
              the National Theatre and the reconstruction of 40 Police Stations
              nationwide.
              <br /> <br /> The Body of Banks in Nigeria is poised to make a
              significant impact on the cultural and infrastructural landscape
              of the nation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

const Committee = ({ bankImg, name }) => {
  return (
    <div className="w-[20%] bankCard flex flex-col justify-center items-center">
      <div className="bg-white h-[24rem] w-[24rem] rounded-full flex items-center justify-center shadow-lg mb-16">
        <img loading="lazy" src={bankImg} alt={`${name}`} className="w-1/2" />
      </div>
      <p className="text-x font-medium uppercase">{name}</p>
    </div>
  );
};
