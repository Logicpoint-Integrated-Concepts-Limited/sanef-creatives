/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { CheckIcon } from "../assets/svg";

// import bg from "../assets/svg/bg.svg";
// // import bg2 from '../assets/images/bg2.png';

import { Stations, ProjectManagers } from "../helpers/Constant";
import LogoCard from "../components/LogoCard";
import { If } from "../helpers/Functions";

const PoliceStation = () => {
  const navigate = useNavigate();

  Stations.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <section
        className="section__hero-media bg-black h-[70rem] relative section-padding bg-cover bg-center -z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, #313136d2, #313136ca),url(${"https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331426/Website%20Assets/t2d71bbx7lbg1n5dhlzb.jpg"})`,
        }}
        id="police-station"
      >
        <div className="sanef-wrap">
          <h1 className="text-xl text-white w-[70%] font-extrabold mt-56">
            The Police Station <br /> Renovation Project
          </h1>
        </div>
      </section>
      <section className="section__history bg-[#E7F3ED] py-80 sm:h-[90rem] z-20">
        <div className="sanef-wrap">
          <div className="inline-block mb-20">
            <h1 className="text-x2 font-semibold mb-2">The Background Story</h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>
          <p className="text-main leading-[36px] text-justify">
            The Body of Banks, a group comprising all the banks in Nigeria,
            decided to support the Government in restoring some damaged Police
            Stations in various parts of the country, as part of its Corporate
            Social Responsibility (CSR). 40 police Stations across the country
            were identified for refurbishment or reconstruction.
            <br />
            <br />
            The scope of the project encompassed extensive renovations, which
            included the conversion of some of the Stations from bungalows to
            one-storey buildings to meet modern structural standards.
            <br /> <br />
            The project commenced in September 2021 and was completed in May
            2022. The restoration efforts also included the provision of
            essential furniture and fixtures such as office tables, chairs, new
            sanitary wares, lights, fans, and air conditioners, and the
            installation of CCTV cameras in each of the Police Stations.
          </p>
        </div>
      </section>
      <section className="section__scope bg-[#fff] py-80 sm:h-[70rem] relative">
        <div className="sanef-wrap">
          <div className="mb-20 inline-block text-center">
            <h1 className="text-x2 font-semibold text-center">
              Behind the Scenes: The Project Overview
            </h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>
          <p className="text-main leading-[36px] text-justify">
            The project's comprehensive scope of work categorized the Police
            Stations into three main types: fully reconstructed, partially
            reconstructed, and refurbished. The civil works involved activities
            on the foundation, structure, and external elements of the station
            buildings. Additionally, Electrical & Mechanical Works were
            incorporated, and the provision of furniture was also included in
            the project. Key aspects of the work done in this project can be
            categorized into:
          </p>
        </div>
        <div className="absolute top-[70%] md:left-[35%] left-0 w-[50rem]">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
      </section>

      <section className="section__services-ps bg-[#F9F9F9] section-padding border-2 border-[#9999992a] relative z-10">
        <div className="sanef-wrap">
          <div className="flex gap-56 flexCol">
            <div className="flex-1 mt-56">
              <h2 className="text-base font-semibold mb-6">
                {" "}
                Foundation and Structural Works:
              </h2>
              {/* <p className="text-x mb-20">The scope of services for electrical and mechanical works on each Station included theInstallation of the following</p> */}
              <ul className="flex flex-col gap-10 mb-28">
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">New foundation construction.</p>
                </li>
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">Structural repairs and enhancements.</p>
                </li>
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">
                    Construction of concrete detention cells.
                  </p>
                </li>
              </ul>
              <h2 className="text-base font-semibold mb-6">
                {" "}
                Masonry and Finishing Works:
              </h2>
              <ul className="flex flex-col gap-10 mb-28">
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">Plastering, screeding, and painting.</p>
                </li>
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">
                    Installation of porcelain floor tiles.
                  </p>
                </li>
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">Installation of suspended ceilings.</p>
                </li>
              </ul>
              <h2 className="text-base font-semibold mb-6">
                Doors, Windows, and Security Features:
              </h2>
              <ul className="flex flex-col gap-10 mb-28">
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">Replacement of timber doors.</p>
                </li>
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">Installation of aluminium windows.</p>
                </li>
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">Installation of burglar bars.</p>
                </li>
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">
                    Installation of steel door for the armoury.
                  </p>
                </li>
              </ul>
              <Button
                text="View Police Stations"
                href="#"
                onClick={() => navigate("/police-station/list")}
              />
            </div>

            <div className="flex-1">
              <img
                loading="lazy"
                src={
                  "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331354/Website%20Assets/mfrocx6mcbyo7rjetox7.png"
                }
                alt="police station image 1"
                className="w-full mb-16"
              />
              <img
                loading="lazy"
                src={
                  "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331353/Website%20Assets/rkbfezofgufddvnqcxci.png"
                }
                alt="police station image 2"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-20%] md:left-[10%] left-0 w-[50rem]">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
      </section>
      <section className="section__services-ps bg-[#FFF8F1] section-padding border-2 border-[#e5bd9652] relative z-10">
        <div className="sanef-wrap">
          <div className="flex gap-56 flexCol">
            <div className="flex-1 mt-56">
              <h2 className="text-base font-semibold mb-6">
                Roofing and Cladding:
              </h2>
              {/* <p className="text-x mb-20">The following items were delivered to each Station.</p> */}
              <ul className="flex flex-col gap-10 mb-28">
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">Installation of roofing sheets.</p>
                </li>
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">
                    {" "}
                    Application of hard-wearing brick cladding at station
                    entrances.
                  </p>
                </li>
              </ul>
              <h2 className="text-base font-semibold mb-6">Fence Repairs:</h2>
              <ul className="flex flex-col gap-10 mb-28">
                <li className="flex items-center gap-5">
                  <CheckIcon />
                  <p className="text-x">
                    Repairing or rebuilding damaged fences.
                  </p>
                </li>
              </ul>
              <h2 className="text-base font-semibold mb-6">Furniture:</h2>
              <p className="text-x mb-20">
                The stations received a tailored assortment of furnishings aimed
                at enhancing functionality and comfort. This included executive
                desks, office tables and chairs and mild steel 3-seater chairs.
                These provisions were delivered to ensure the optimal setup for
                various operational needs.
              </p>
              <Button
                text="View Police Stations"
                href="#"
                onClick={() => navigate("/police-station/list")}
              />
            </div>

            <div className="flex-1">
              <img
                loading="lazy"
                src={
                  "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331354/Website%20Assets/mfrocx6mcbyo7rjetox7.png"
                }
                alt="police station image 1"
                className="w-full mb-16"
              />
              <img
                loading="lazy"
                src={
                  "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331412/Website%20Assets/dcozhsyktsfcybh3vzf0.jpg"
                }
                alt="police station image 2"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[80%] sm:left-[7%] left-0 w-[50rem]">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
      </section>
      {/* <section className="section__services-ps bg-[#FFF8F1] section-padding border-2 border-[#e5bd9652] relative">
                <div className="sanef-wrap">
                    <div className="flex gap-56 flexCol">
                        <div className="flex-1 mt-56">
                            <h2 className="text-base font-semibold mb-6">Detention Facilities:</h2>
                            <ul className="flex flex-col gap-10 mb-28">
                                <li className="flex items-center gap-5">
                                    <CheckIcon />
                                    <p className="text-x">Construction of concrete detention cells.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <img loading="lazy" src={'https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331354/Website%20Assets/mfrocx6mcbyo7rjetox7.png'} alt="police station image 1" className="w-full mb-16" />
                        </div>
                    </div>
                    <div className="flex gap-56 flexCol relative">
                        <div className="flex-1 mt-56">
                            <h2 className="text-base font-semibold mb-6">Fence Repairs:</h2>
                            <ul className="flex flex-col gap-10 mb-28">
                                <li className="flex items-center gap-5">
                                    <CheckIcon />
                                    <p className="text-x">Repairing or rebuilding damaged fences.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <img loading="lazy" src={'https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331412/Website%20Assets/dcozhsyktsfcybh3vzf0.jpg'} alt="police station image 2" className="w-full relative z-10" />
                        </div>
                        <div className="absolute bottom-[-17%] md:right-[-10%] right-0 w-[50rem]">
                            <img src={'https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png'} alt="Oval Image" className="w-full" />
                        </div>
                    </div>

                    <div className="mt-52">
                        <h2 className="text-base font-semibold mb-6">Furniture:</h2>
                        <p className="text-main mb-20 text-justify">The stations received a tailored assortment of furnishings aimed at enhancing functionality and comfort. This included office tables and chairs for general offices, executive desks and seating for Divisional Police Officer’s (DPO) offices, and specifically, mild steel 3-seater chairs for the charge rooms. These provisions were delivered to ensure the optimal setup for various operational needs.</p>
                        <Button text="View Police Stations" href='#' onClick={() => navigate('/police-station/list')} />
                    </div>
                </div>
                <div className="absolute bottom-[-15%] sm:left-[35%] left-0 w-[50rem]">
                    <img src={'https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png'} alt="Oval Image" className="w-full" />
                </div>
            </section> */}

      <section className="section_stations section-padding bg-[#F9F9F9] relative z-10">
        <div className="sanef-wrap">
          <div className="inline-block mb-40 text-center">
            <h1 className="text-x2 font-semibold">List of Police Stations</h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-72 gap-40">
            {/* <div className="sm:w-[100rem] w-full">
              <img
                src={
                  "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719592496/Nigeria_Map_Chart_1_2_qmwda9.png"
                }
                alt="Map of Nigeria"
                className="w-full"
              />
            </div> */}
            <div className="flex gap-10 flexCol gap10">
              <div className="flex-1 text-center">
                <div className="head text-[3.3rem] text-black mb-10 font-extrabold bg-[#fcf202] py-2 uppercase">
                  Lagos
                </div>
                <div className="flex flex-wrap gap-5 justify-center">
                  {Stations.map((el) => (
                    <div
                      key={el.name}
                      className="item text-[1.7rem] sm:w-[49%] w-[45%] py-5 border flex items-center justify-center"
                    >
                      {el.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-12 text-center">
                  <div className="head text-[3.3rem] text-black font-extrabold bg-[#8cd5f7] py-2 mb-10 uppercase">
                    Ogun
                  </div>
                  <div className="">
                    <div className="text-[1.7rem] py-5 px-16 border w-max">
                      Atan-Ota Police station, Ogun State
                    </div>
                  </div>
                </div>
                <div className="mb-12 text-center">
                  <div className="head text-[3.3rem] text-black font-extrabold bg-[#f553a1] py-2 mb-10 uppercase">
                    Ondo
                  </div>
                  <div className="">
                    <div className="text-[1.7rem] py-5 px-16 border w-max">
                      Oda road, Akure Nigeria Police station, Ondo State
                    </div>
                  </div>
                </div>
                <div className="mb-12 text-center">
                  <div className="head text-[3.3rem] text-black font-extrabold bg-[#f6b9fd] py-2 mb-10 uppercase">
                    Rivers
                  </div>
                  <div className="mb-5">
                    <div className="text-[1.7rem] py-5 px-16 border w-max">
                       Afam Police station, Rivers state
                    </div>
                  </div>
                  <div className="">
                    <div className="text-[1.7rem] py-5 px-16 border w-max">
                        Oyigbo Police station, Rivers state
                    </div>
                  </div>
                </div>
                <div className="mb-12 text-center">
                  <div className="head text-[3.3rem] text-black font-extrabold bg-[#eff3b4] py-2 mb-10 uppercase">
                    Edo
                  </div>
                  <div className="">
                    <div className="text-[1.7rem] py-5 px-16 border w-max">
                       Oba Market Police station, Edo State
                    </div>
                  </div>
                </div>
                <div className="mb-12 text-center">
                  <div className="head text-[3.3rem] text-black font-extrabold bg-[#ea8e18] py-2 mb-10 uppercase">
                    Ebonyi
                  </div>
                  <div className="">
                    <div className="text-[1.7rem] py-5 px-16 border w-max">
                      Central Police station Abakaliki, Ebonyi State
                    </div>
                  </div>
                </div>
                <div className="mb-12 text-center">
                  <div className="head text-[3.3rem] text-black font-extrabold bg-[#afb1df] py-5 mb-10 uppercase">
                    Imo
                  </div>
                  <div className="">
                    <div className="text-[1.7rem] py-2 px-16 border w-max">
                       Nwaoriebu Police station, Imo state
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section__project-managers section-padding bg-[#FFF8F1]">
        <div className="sanef-wrap">
          <div className="inline-block mb-40 text-center">
            <h1 className="text-x2 font-semibold">Project Manager</h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>

          <div className="flex gap-10 gap-y-40 flex-wrap w-[95%] mx-auto mt-6 justify-start">
            <If condition={ProjectManagers?.length > 0}>
              {ProjectManagers?.map((el, idx) => (
                <LogoCard key={idx} logo={el.logo} name={el.name} />
              ))}
            </If>
          </div>
        </div>
      </section>
    </>
  );
};

export default PoliceStation;
