/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Header from "../layout/Header";
import HomeNews from "../layout/HomeNews";

const Home = () => {
  const navigate = useNavigate();
  {/* VITE_REACT_APP_LOCAL_BASEURL=https://staging.sanef-strapi.zoropay.com/api/ 
      VITE_REACT_APP_LOCAL_BEARER_TOKEN="6b8019b3b959d9a55632b42618bd4c93db9b4fa6ef0718fdfb2e0255a80e77663198b0c52f5c54e2f2dd1100310e0755a650de0b19aeb76e01f92e4a94d513724cb8b500c836723162fd0202892709ea468a4f9b251ea00609a89c410e3edbcc827cf809211fa0334b04fa3bb29d1df6c649701939cf825bea33a1b854ff8b8e"
    
    */
    
  }

  return (
    <>
      <Header className="bg-[#0f392351]" />

      <section
        className="section__hero-home h-[85rem] w-full z-10 absolute top-0"
        id="home"
      >
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          {/* Image 1 */}
          <div
            className="hero-img"
            style={{
              backgroundImage: `linear-gradient(to bottom, #00000050, #00000050),url(${"https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331369/Website%20Assets/f6jbifbnfuv5y18e9asc.jpg"})`,
            }}
          >
            {/* <Header className="bg-[#0f392333]" /> */}
            <div className="sanef-wrap">
              <div className="legend">
                <h1 className="mb-20 font-medium one wFull">
                  Welcome to SANEF Creatives Limited – Driving Change Through
                  Creativity
                </h1>
                <Button
                  text="About Us"
                  onClick={() => navigate("/about-us")}
                  className="z-50"
                />
              </div>
            </div>
          </div>

          {/* Image 7 */}
          <div
            className="hero-img"
            style={{
              backgroundImage: `linear-gradient(to bottom,#00000050, #00000050),url(${"https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331368/Website%20Assets/bisp27o0ozdj6c48dfva.jpg"})`,
            }}
          >
            {/* <Header className="bg-[#0f392333]" /> */}
            <div className="legend">
              <h1 className="mb-20 font-medium three wFull">
                Explore the Journey of Restoration of the National Theatre
              </h1>
              <Button
                onClick={() => navigate("/our-projects/national-theatre")}
                className="z-50"
              />
            </div>
          </div>

          {/* Image 5 */}
          <div
            className="hero-img"
            style={{
              backgroundImage: `linear-gradient(to bottom, #00000050, #00000050),url(${"https://res.cloudinary.com/dgvqjuxpg/image/upload/v1713236032/PoliceStations/Nwaorieubi/cvjafenqbio4uflaoqpx.jpg"})`,
            }}
          >
            {/* <Header className="bg-[#0f392333]" /> */}
            <div className="legend">
              <h1 className="mb-20 font-medium three wFull">
                Explore the Reconstruction and Refurbishing of Police
                Stations across Nigeria
              </h1>
              <Button
                onClick={() => navigate("/our-projects/police-station")}
                className="z-50"
              />
            </div>
          </div>
        </Carousel>
      </section>

      <section
        className="section__about-home bg-[#E7F3ED] section-padding relative z-30"
        style={{ marginTop: "67rem" }}
      >
        <div className="sanef-wrap">
          <div className="flex mb-52 flexCol">
            <div className="flex flex-col h-max flex-1">
              <h1 className="text-x2 font-semibold inline-block mb-1">
                About SANEF Creatives Limited
              </h1>
              <div className="flex items-start justify-start">
                <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
              </div>
            </div>

            <div className="w-[40%] wFull">
              <p className="text-main leading-[36px] my-20 text-justify">
                SANEF Creatives Limited was incorporated on the 27th of December
                2019. The company is a special purpose vehicle of the Bankers’
                Committee, which is composed of the Central Bank of Nigeria and
                the Body of Banks in Nigeria, for the purpose of driving core
                initiatives of the committee such as the restoration of the
                National Theatre and the reconstruction of 40 Police Stations
                nationwide.
              </p>
              <Button href="#" onClick={() => navigate("/about-us")} />
            </div>
          </div>

          <div className="inline-block my-40">
            <h1 className="text-x2 font-semibold inline-block mb-1">
              Our Impact in Numbers
            </h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>

          <div className="border-t border-b border-[#DDDBDB] py-32 relative">
            <div className="absolute top-[-40%] md:right-[-5%] right-[0%] md:w-[55rem] w-[45rem]">
              <img
                src={
                  "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png"
                }
                alt="Oval Image"
                className="w-full"
              />
            </div>
            <h1 className="text-base text-primary font-semibold mb-24 textCenter">
              Police Station Renovation Project
            </h1>
            <div className="flex justify-evenly mb-5 flexCol justifyCenter gap8">
              <div className="text-center">
                <div className="flex gap-5 mb-5">
                  <img
                    src={`https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331355/Website%20Assets/oxmaz0qgkxdcod8inzoh.png`}
                    alt="station image"
                  />
                  <h1 className="text-xl text-primary font-black">40</h1>
                </div>
                <p className="text-main text-[#6B6B6B]">Renovated Stations</p>
              </div>
              <div className="text-center relative">
                <div className="flex gap-8 mb-5">
                  <img
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331392/Website%20Assets/mg8bjnlc6ehnnqktwpwq.png"
                    }
                    alt="Nigeria image"
                  />
                  <h1 className="text-xl text-primary font-black">7</h1>
                </div>
                <p className="text-main text-[#6B6B6B]">States Covered</p>
              </div>
            </div>
          </div>
          <div className="mt-32">
            <h1 className="text-base text-primary font-semibold mb-24 textCenter">
              National Theatre Restoration Project
            </h1>
            <div className="flex justify-between mb-5 flexCol justifyCenter gap8">
              <div className="text-center flex flex-col items-center">
                <div className="flex gap-5 mb-5">
                  <img
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331381/Website%20Assets/kmjqyfyr8op9iecxc1dw.png"
                    }
                    alt="Art imag"
                  />
                  {/* <div className="flex items-center">
                    <h1 className="text-xl text-primary font-black">400</h1>
                    <div className="bg-[#007639] flex justify-center items-center text-white text-[6rem] rounded-full w-[7rem] h-[7rem]">
                      <span>+</span>
                    </div>
                  </div> */}
                </div>
                <p className="text-main text-[#6B6B6B]">
                  Restoration of Artworks and Curatorial
                </p>
              </div>
              <div className="text-center">
                <div className="flex gap-10 mb-5">
                  <img
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331383/Website%20Assets/hhzdtx4tssaucibhbnid.png"
                    }
                    alt="Art image"
                  />
                  <div className="flex items-center">
                    <h1 className="text-xl text-primary font-black">7000</h1>
                    <div className="bg-[#007639] flex justify-center items-center text-white text-[6rem] rounded-full w-[7rem] h-[7rem]">
                      <span>+</span>
                    </div>
                  </div>
                </div>
                <p className="text-main text-[#6B6B6B]">Sitting Capacity </p>
              </div>
              <div className="text-center">
                <div className="flex gap-10 mb-5">
                  <img
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331379/Website%20Assets/w9njxe8tekfdofyexc3g.png"
                    }
                    alt="Hall image"
                  />
                  <h1 className="text-xl text-primary font-black">3</h1>
                </div>
                <p className="text-main text-[#6B6B6B]">
                  Renovated Cinema Halls
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section__projects-home bg-white section-padding relative z-20 mb-40">
        <div className="absolute top-[-5%] right-[4%] md:w-[55rem] w-[45rem] -z-10 ">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
        <div className="sanef-wrap">
          <div className="inline-block">
            <h1 className="text-x2 font-semibold mb-2">Our Projects</h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>

          <div className="flex justify-between mt-10 lg:mt-40 flexCol gap5">
            <div className="w-[35%] mt-28 lg:mt-56 wFull">
              <h1 className="text-base font-semibold text-[#1E1E1E] mb-10">
                National Theatre Restoration
              </h1>
              <p className="text-main text-[#252525] leading-[36px] mb-24 text-justify">
                The Bankers' Committee takes pride in the commitment to
                transform cultural and iconic landmarks that resonate with the
                heart of our nation. A recent project is the renovation of the
                iconic National Theatre, breathing new life into this cultural
                gem. Explore the transformative restoration of the iconic
                National Theatre.
              </p>
              <Button
                href="#"
                onClick={() => navigate("/our-projects/national-theatre")}
              />
            </div>
            <img
              src={
                "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1727160935/Updated%20Website%20Assets/About%20Us%20-%20National%20theatre%20Photo/About_Us_Page_-_National_Theatre_gcyc4s.jpg"
              }
              alt="Project Image"
              className="w-1/2 wFull"
            />
          </div>
          <div className="flex justify-between mt-32 flexColRev gap5">
            <img
              src={
                "http://res.cloudinary.com/dgvqjuxpg/image/upload/v1713235951/PoliceStations/Afam/lhsbevds1fj1h4rwqxk3.jpg"
              }
              alt="Project Image"
              className="w-1/2 mb-10 br-3 h-[69rem] object-cover"
            />
            <div className="w-[35%] mt-16 lg:mt-56 wFull">
              <h1 className="text-base font-bold text-[#1E1E1E] mb-10">
                Police Station Renovation
              </h1>
              <p className="text-main text-[#252525] leading-[36px] mb-24">
                Join us on a journey of ground-breaking transformation as we
                explore the reconstruction and refurbishing of 40 police
                stations across Nigeria.
              </p>
              <Button
                href="#"
                onClick={() => navigate("/our-projects/police-station")}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-15%] sm:left-[35%] left-0 w-[60rem]-z-10 ">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
      </section>

      <section className="section__news-home bg-[#FFF8F1] section-padding relative z-50">
        <div className="sanef-wrap flex justify-between">
          <div className="inline-block mb-52">
            <h1 className="text-x2 font-medium">News</h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>
          {/* <p className="text-main font-extrabold">1/5</p> */}
        </div>
        <div className=" sanef-wrap flex items-center gap-10">
          {/* <button className="bg-[#a7a8a9] p-3 rounded-full h-min">
            <AngleLeftIcon />
          </button> */}

          <div className="flex gap-20 flex-1 overflow-auto flexCol">
            <HomeNews
              newsTitle={
                "CBN, Bankers’ Committee Commence National Theatre Rehabilitation"
              }
            />
            <HomeNews
              newsTitle={
                "On Tour of Construction at National Theatre, Emefiele, Sanwo-Olu, Mohammed Commends Pace of Work"
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-40">
          <Button href="#" onClick={() => navigate("/media")} />
        </div>
      </section>
    </>
  );
};

export default Home;
