// import spaces from '../assets/images/spaces.png'
import { useNavigate } from "react-router-dom";
import { If } from "../helpers/Functions";

import { Contractors, Consultants } from "../helpers/Constant";
import LogoCard from "../components/LogoCard";

const Spaces = () => {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="section__hero-spaces bg-black sm:h-[60rem] section-padding bg-cover bg-center bg-no-repeat"
        id="spaces"
        style={{
          backgroundImage: `linear-gradient(to bottom, #313136d2, #313136ca),url(${"https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331411/Website%20Assets/bdcififtg7ix3m2ghbux.png"})`,
        }}
      >
        <div className="sanef-wrap">
          <h1 className="text-xl text-white w-[70%] wFull font-extrabold mt-40">
            The National Theatre <br /> Restoration Journey
          </h1>
          <p className="text-main text-white w-[70%] font-medium">
            Join us on a journey of restoration. Explore the before,
            work-in-progress and completed projects.
          </p>
        </div>
      </section>

      {/* HEXAGON USING ACTUAL CLIP PATHS */}
      {/* <section className="section__consultants-spaces bg-[#FFF8F1] section-padding mb-0 relative">
        <div className="sanef-wrap">
          <div className="clipped-parent flex gap-10 gap-y-40 flex-wrap w-[95%] mx-auto mt-6 justify-around">
            <div className="clipped bg-second w-[30rem] h-[32rem]"></div>

            <svg
              className="clipped-svg-filter"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="clipped-svg-filter">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </section> */}

      <section className="section__spaces section-padding relative z-10 ">
        <div className="hexes sanef-wrap flex justify-center items-center">
          <div className="">
            <div className="flex gap-12 justify-center">
              <button onClick={() => navigate(`/spaces/main-bowl`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832088/Website%20Assets/HexLinks/Final/Bowl_f3njzr.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/banquet-hall`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832082/Website%20Assets/HexLinks/Final/Banquet_ub2aw6.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/exhibition-hall`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "http://res.cloudinary.com/dgvqjuxpg/image/upload/v1722874013/Website%20Assets/HexLinks/Final/Exhibition.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
            </div>
            <div className="flex gap-12 md:-mt-24 -mt-12">
              <button onClick={() => navigate(`/spaces/cinema-halls`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832086/Website%20Assets/HexLinks/Final/Cinema_aa92kk.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/vip-spaces`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832079/Website%20Assets/HexLinks/Final/VIPSpaces_n0dahd.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>{" "}
              </button>
              <button
                onClick={() => navigate(`/spaces/general-and-vip-lobbies`)}
              >
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832074/Website%20Assets/HexLinks/Final/Lobbies_faumoj.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/concession-stands`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832071/Website%20Assets/HexLinks/Final/Concession_x5o1g2.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
            </div>
            <div className="flex gap-12 md:-mt-24 -mt-12 justify-center">
              <button onClick={() => navigate(`/spaces/conservation-lab`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832085/Website%20Assets/HexLinks/Final/Conservation_nxjha7.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/industrial-kitchen`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832081/Website%20Assets/HexLinks/Final/Kitchen_r5klvi.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/offices`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832075/Website%20Assets/HexLinks/Final/Offices_sbzhi1.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
            </div>
            <div className="flex gap-12 md:-mt-24 -mt-12">
              <button onClick={() => navigate(`/spaces/sanitary-facilities`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832083/Website%20Assets/HexLinks/Final/Sanitary_vcnyyh.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/rooftop-landscape`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832078/Website%20Assets/HexLinks/Final/Rooftop_b0n2zy.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/ring-road-repair`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832073/Website%20Assets/HexLinks/Final/Ring_lzdhlp.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/landscape`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={`https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832071/Website%20Assets/HexLinks/Final/Landscape_lxxaqx.png`}
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
            </div>
            <div className="flex gap-12 md:-mt-24 -mt-12 justify-center">
              <button onClick={() => navigate(`/spaces/curatorial-artefacts`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832610/Website%20Assets/HexLinks/Final/Curatorial_smjunq.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/alternative-power`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={`https://res.cloudinary.com/dgvqjuxpg/image/upload/v1721921385/Website%20Assets/HexLinks/Final/Alternative_Power_ubwp6w.png`}
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/externals`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719832071/Website%20Assets/HexLinks/Final/Externals_cxc73j.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
            </div>
            <div className="flex gap-12 md:-mt-24 -mt-12 justify-center">
              <button onClick={() => navigate(`/spaces/gatehouse`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719841737/Website%20Assets/HexLinks/Final/Gatehouse_il06fn.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
              <button onClick={() => navigate(`/spaces/changing-room`)}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1719841729/Website%20Assets/HexLinks/Final/Artist_s_Changing_Room_gzhrvv.png"
                    }
                    alt=""
                    className="w-[30rem]"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section__contractors-spaces bg-[#E7F3ED] section-padding relative">
        <div className="absolute top-[-25%] md:right-[-10%] right-0 w-[50rem] -z-10">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
        <div className="sanef-wrap">
          <div className="inline-block mb-40 text-center">
            <h1 className="text-x2 font-semibold">Contractors</h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>
          <div className="flex gap-10 gap-y-40 flex-wrap w-[95%] mx-auto mt-6 justify-around">
            <If condition={Contractors?.length > 0}>
              {Contractors?.map((el, idx) => (
                <LogoCard
                  key={idx}
                  logo={el.logo}
                  name={el.name}
                  description={el.specialization}
                />
              ))}
            </If>
          </div>
        </div>
      </section>

      <section className="section__consultants-spaces bg-[#FFF8F1] section-padding mb-0 relative">
        <div className="absolute top-[30%] left-[-13%] w-[50rem] z-5">
          <img
            src={
              "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331356/Website%20Assets/vbyq1ljdimb5pxdpvowo.png"
            }
            alt="Oval Image"
            className="w-full"
          />
        </div>
        <div className="sanef-wrap">
          <div className="inline-block mb-0 text-center">
            <h1 className="text-x2 font-semibold">Consultants</h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>
          <div className="flex gap-10 gap-y-40 flex-wrap w-[95%] mx-auto mt-6 justify-around">
            <If condition={Consultants?.length > 0}>
              {Consultants.map((el, idx) => (
                <LogoCard
                  key={idx}
                  logo={el.logo}
                  name={el.name}
                  description={el.specialization}
                  color={el.color}
                />
              ))}
            </If>
          </div>
        </div>
      </section>
    </>
  );
};

export default Spaces;
