/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import Button from "../components/Button";

const Projects = () => {
  const [text, setText] = useState(false);

  return (
    <>
      <section
        className="section__hero-projects bg-black h-[85rem] section-padding"
        id="projects"
      >
        <div className="sanef-wrap">
          <h1 className="text-xl text-white w-[70%] wFull font-extrabold mt-40">
            The Restoration of <br /> the National Theatre
          </h1>
        </div>
      </section>

      <section className="section__story-projects bg-[#E7F3ED] section-padding">
        <div className="sanef-wrap">
          <div className="inline-block mb-20">
            <h2 className="text-[3.5rem] font-bold mb-2">How it all started</h2>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>
          <p className="text-main leading-[36px] text-justify">
            The remarkable restoration of the National Theatre is a monumental
            project undertaken by the Bankers’ Committee. The Bankers’ Committee
            is an exclusive body for all banks in Nigeria and the Central Bank
            of Nigeria (CBN).
            <br />
            <br />
            The National Theatre, which is the primary centre for performing
            arts in the country, has celebrated and promoted Nigerian arts and
            culture for over four decades. However, over the years, the National
            Theatre faced various challenges, including a lack of maintenance
            and funding, which made the iconic monument lose its lustre and
            relevance to society. It was in response to this decline that a
            timely intervention to restore the edifice to its former glory was
            made.
            <br />
            <br />
            This intervention was a collaborative effort between the Federal
            Government and the Bankers’ Committee. On February 4th 2021, the
            National Theatre was handed over to the Bankers’ Committee for
            rehabilitation and restoration to greater glory. The project began
            in earnest in March 2021, and the full restoration is nearing
            completion.
            <br />
            <br />
            This project was aimed at restoring the cultural beacon to its
            former glory and ensuring it continues to serve as the national hub
            of artistic excellence for generations to come. The National Theatre
            will be home to conference centres, cinema halls, auditoriums,
            exhibitions, host revolutionary events and revive the heritage of
            Nigeria.
          </p>
        </div>
      </section>

      <section className="section__project bg-white pt-60 relative mb-22">
        <div className="sanef-wrap">
          <div className="flex gap-28 items-center flexCol gap5">
            <div className="flex-1 z-30">
              <h2 className="text-[3.5rem] my-20 mb-10 font-bold">
                A Dream Takes Shape - The Birth of a Heritage
              </h2>
              <p className="text-main leading-[36px] text-justify">
                The story of the National Theatre began in the era of General
                Yakubu Gowon, the former Head of State, who envisioned a central
                hub for the arts, a place that would embody the three P's:
                Presentation, Preservation, and Promotion of Nigeria's rich
                cultural heritage. This dream took root and eventually became a
                reality under the tenure of President General Olusegun Obasanjo
                (Rtd.). The construction of the cultural edifice was officially
                completed in 1976.
                <br /> <br />
                {text ? (
                  <>
                    <h2 className="text-[3.5rem] mb-10 font-bold">Design</h2>
                    Designed by a Bulgarian architect, Vojin Bakić, and
                    constructed by Bulgarian construction company, Techno
                    Exporstroy, the National Theatre's physical structure was a
                    testament to international collaboration. The exterior was
                    designed and built to look like a military hat. The
                    structure was modelled after the Palace of Culture and
                    Sports in Varna, Bulgaria, with the Nigerian National
                    Theatre being the bigger of the two.
                  </>
                ) : (
                  <></>
                )}
              </p>
              {text ? (
                <></>
              ) : (
                <Button
                  onClick={() => setText(!text)}
                  className="btn-primary "
                ></Button>
              )}
              <p className="text-[2rem] mt-10 text-white leading-[25.6px] bg-[#CF910D] px-10 py-16 rounded-lg relative z-20">
                Culture Enthusiasts Gather During The Festac ‘77 Festival
              </p>
            </div>
            <div className="w-[57%] wFull">
              <div className="">
                <img
                  loading="lazy"
                  src={`https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719236240/Zulu_Photo_1_oeuj5i.jpg`}
                  alt=""
                  className="w-full rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-25%] left-[-10%] w-[50rem] z-10">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
      </section>

      <section className="section__project bg-white pt-60 relative">
        <div className="sanef-wrap">
          <div className="flex gap-28 items-center flexCol">
            <div className="w-[57%] wFull relative z-30">
              <img
                loading="lazy"
                src={`https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719236240/Zulu_Photo_2_k9mmcx.jpg`}
                alt=""
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            <div className="flex-1 ">
              <h2 className="text-[3.5rem] my-20 mb-10 font-bold">
                FESTAC '77 - A Cultural Convergence
              </h2>
              <p className="text-main mb-32 leading-[36px] text-justify">
                The National theatre was constructed in the wake of a historic
                event, Festival of Arts and Culture (FESTAC '77), a cultural
                convergence that brought together troupes from across the globe,
                creating a spectacle of epic proportions. This historic event
                put the nation on the map and gave credence to the creative arts
                industry. This marked the beginning of the National Theatre's
                journey as the centre of Nigeria's artistic and cultural
                expression.
                {/* {text ? (
                  <>
                    Designed by a Bulgarian architect, Vojin Bakić, and
                    constructed by Bulgarian construction company, Techno
                    Exporstroy, the National Theatre's physical structure was a
                    testament to international collaboration, The exterior was
                    designed and built to look like a military hat. The
                    structure was modelled after the Palace of Culture and
                    Sports in Varna, Bulgaria, with the Nigerian National
                    Theatre being the bigger of the two.
                  </>
                ) : (
                  <>...</>
                )} */}
              </p>
              {/* {text ? (
                <></>
              ) : (
                <Button
                  onClick={() => setText(!text)}
                  className="btn-primary mb-48"
                ></Button>
              )} */}
              <p className="text-[2rem] text-white leading-[25.6px] bg-[#CF910D] px-20 py-16 rounded-lg relative z-10">
                Cultural Displays; Stage Plays, Match Pasts, Dubar Displays By
                Different Countries And States At The ‘77 Festival
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-20%] md:right-[-15%] right-0 w-[55rem]">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331357/Website%20Assets/gathqxro5n8p3e1rgkkb.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
      </section>

      <section className="section__project bg-white pt-60">
        <div className="sanef-wrap">
          <div className="flex gap-28 items-center flexCol">
            <div className="flex-1 ">
              <h2 className="text-[3.5rem] my-20 mb-10 font-bold">
                Evolution of a Cultural Icon
              </h2>
              <p className="text-main mb-32 leading-[36px] text-justify">
                For over four decades, the National Theatre has celebrated and
                promoted Nigerian arts and culture. As a symbol of national
                unity, it stands as both an edifice and an idea that embodies
                the spirit and creativity of Nigeria where business and
                entertainment collide.
                {/* {text ? (
                  <>
                    Designed by a Bulgarian architect, Vojin Bakić, and
                    constructed by Bulgarian construction company, Techno
                    Exporstroy, the National Theatre's physical structure was a
                    testament to international collaboration, The exterior was
                    designed and built to look like a military hat. The
                    structure was modelled after the Palace of Culture and
                    Sports in Varna, Bulgaria, with the Nigerian National
                    Theatre being the bigger of the two.
                  </>
                ) : (
                  <>...</>
                )} */}
              </p>
              {/* {text ? (
                <></>
              ) : (
                <Button
                  onClick={() => setText(!text)}
                  className="btn-primary mb-48"
                ></Button>
              )} */}
              <p className="text-[2rem] text-white leading-[25.6px] bg-[#CF910D] px-20 py-16 rounded-lg">
                Arts, Culture & Entertainment Enthusiasts Attending Events at
                the National Theatre in the 70’s.
              </p>
            </div>
            <div className="w-[57%] wFull">
              <img
                loading="lazy"
                src={`https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719236239/Zulu_Photo_3_ffrl5k.jpg`}
                alt=""
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section__project-detail bg-white section-padding">
        <div className="sanef-wrap">
          <div className="w-[60%] wFull mx-auto relative">
            <h1 className="text-[3.3rem] text-center mb-10 font-bold">
              The Golden Era: A Glimpse into the National Theatre's Legacy
            </h1>
            <p className="text-main leading-[40px] text-justify">
              <span className="block mb-10">
                The National Theatre was not just a building; it was a sanctuary
                for artists and the common man alike, where renowned actors
                showcased their talents. Notable among these actors was Adeyemi
                Afolayan (Ade-Love) whose works such as "Kadara," "Ija Ominira,"
                and "Efunsetan Aniwura," transcended the boundaries of mere
                entertainment and became box office sensations. Renowned
                Nigerian playwright and actor, Hubert Ogunde, also performed
                many of his ground-breaking plays at the National Theatre. His
                works were entertaining and also carried important social
                messages, thus making the National Theatre a platform for
                addressing critical issues at the time.
              </span>
              <span className="block mb-10">
                The National Theatre played host to some of the most significant
                cultural events in Nigeria, such as FESTAC '77, the second World
                Black and African Festival of Arts and Culture, which was held
                in 1977.
              </span>
              <span className="block mb-10">
                The edifice is adorned with sculptures and carvings that tell
                stories of legendary figures like Queen Amina of Zazzau and
                Emotan of Benin; which also serve as a tribute to the historical
                icons who have shaped our nation.
              </span>
              <span className="block mb-10">
                Inside the National Theatre, we find artworks by artists like
                Bruce Onabrakpeya, Erhabor Emokpae, Yusuf Grillo, Isiaka Adam
                Osunde, Amos Odion and Ayo Ajayi, which add depth and vibrancy
                to the space. The rich artistic expressions continue with
                carvings that adorn the surroundings, creating an ambiance that
                resonates with culture and heritage. The ‘Federal Palace
                Kitchen’ in its prime, served as a culinary haven, delighting
                visitors with the finest cuisine.
              </span>
              <span className="block mb-10">
                These are some of the elements that form the essence of the
                National Theatre, symbolising the arts, culture, and heritage of
                the nation.
              </span>
              {/* {text2 && (
                <span>
                  Inside the National Theatre, we find mural designs by artists
                  like Bruce Onabrakpeya, which add depth and vibrancy to the
                  space. The rich artistic expressions continue with carvings by
                  great artists that adorn the surroundings, creating an
                  ambiance that resonates with culture and heritage. The Federal
                  Palace Kitchen also, in its prime, served as a culinary haven,
                  delighting visitors with the finest cuisine. These elements
                  form the essence of the National Theatre, symbolising the
                  arts, culture, and heritage of the nation.
                </span>
              )} */}
            </p>
            {/* <Button
              text={text2 ? "Show Less" : "Read More"}
              onClick={() => setText2(!text2)}
            /> */}
            {/* <div className="absolute bottom-[-30%] left-[25%] w-[55rem]">
              <img src={ovalImg2} alt="Oval Image" className="w-full" />
            </div> */}
          </div>
        </div>
      </section>

      <section className="section__photo-project w-full">
        <img
          loading="lazy"
          src={
            "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331358/Website%20Assets/nl48ca0a97qlv1oowzrk.png"
          }
          alt=""
          className="w-full"
        />
      </section>

      {/* <section className="section__project bg-[#F9F9F9] pt-60">
        <div className="sanef-wrap">
          <div>
            <h2 className="text-[3.5rem] mb-7 font-bold">
              A Place for the People
            </h2>
            <p className="text-x mb-20 w-[70%] leading-[33px]">
              The National Theatre was the theatre of the people. Nigerians
              found solace in its artistry. It was a sanctuary where
              entertainment transcended class. <br />
              The Main Bowl, with its flipping stage, which was designed for
              3,500 people often had to accommodate over 4,000 people, a
              testament to the insatiable hunger for culture.
            </p>
          </div>

          <div className="flex mt-40">
            <div className="w-[70%]">
              <img loading="lazy" src={img3} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section> */}

      <section className="section__project bg-white pt-60 mb-72 relative">
        <div className="sanef-wrap">
          <div className="flex items-center flexCol gap">
            <div className="w-[60%] wFull z-10 relative">
              <img
                loading="lazy"
                src={
                  "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331360/Website%20Assets/qebqketr8ndjin9dlqup.png"
                }
                alt=""
                className="w-full"
              />
            </div>
            <div className="flex-1 ">
              <h2 className="text-[3.5rem] mb-10 font-bold">
                Preserving Cultural Artefacts
              </h2>
              <p className="text-main mb-32 leading-[36px] text-justify">
                Within the National Theatre lies a treasure trove of cultural
                artefacts, carefully restored and curated by Sandra Mbanefo
                Obiago, the dedicated curator. These artefacts are a testament
                to Nigeria's rich history and heritage which undoubtedly play a
                crucial role in promoting tourism.
                {/* {text ? (
                  <>
                    Designed by a Bulgarian architect, Vojin Bakić, and
                    constructed by Bulgarian construction company, Techno
                    Exporstroy, the National Theatre's physical structure was a
                    testament to international collaboration, The exterior was
                    designed and built to look like a military hat. The
                    structure was modelled after the Palace of Culture and
                    Sports in Varna, Bulgaria, with the Nigerian National
                    Theatre being the bigger of the two.
                  </>
                ) : (
                  <>...</>
                )} */}
              </p>
              {/* {text ? (
                <></>
              ) : (
                <Button
                  onClick={() => setText(!text)}
                  className="btn-primary mb-48"
                ></Button>
              )} */}
              <p className="text-[2rem] text-white leading-[25.6px] bg-[#CF910D] px-20 py-16 rounded-lg">
                Odudu Dancers from Owo, Ondo State. (1977)
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-37%] sm:left-[12%] left-0 sm:w-[60rem] w-[55rem]">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331357/Website%20Assets/gathqxro5n8p3e1rgkkb.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
