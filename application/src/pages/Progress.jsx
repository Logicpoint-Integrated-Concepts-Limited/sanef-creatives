import { LeftArrowIcon, RightArrowIcon } from "../assets/svg";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Markdown from "markdown-to-jsx";

import { Button, Loader, Slider } from "../components";

import { getSpaces } from "../service/API";
import { TbArrowLeft } from "react-icons/tb";
import { useEffect, useState } from "react";

const Progress = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["spaces"],
    queryFn: getSpaces,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!isLoading && data) {
      const filtered = data.data.filter((el) => el.attributes.Slug === id);
      if (filtered.length > 0) {
        setCurrentIndex(0);
        setDetails(filtered[0]?.attributes);
      }
    }
  }, [id, isLoading, data]);

  if (!details && isLoading) {
    return <Loader />;
  }
  if (!details) {
    return (
      <section className="section-padding flex items-center justify-between">
        <h1 className="text-main text-black font-bold">NO DETAILS HERE</h1>
      </section>
    );
  }

  const handleNextSpace = () => {
    const nextIndex = (currentIndex + 1) % data.data.length;
    setCurrentIndex(nextIndex);
    setDetails(data.data[nextIndex]?.attributes);
  };

  const handlePreviousSpace = () => {
    const prevIndex = (currentIndex - 1 + data.data.length) % data.data.length;
    setCurrentIndex(prevIndex);
    setDetails(data.data[prevIndex]?.attributes);
  };

  return (
    <>
      <section
        className="section__hero-progress bg-black h-[60rem] section-padding relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${details?.BannerImage})` }}
        id="progress"
      >
        <div className="sanef-wrap">
          <button
            className="flex gap-3 items-center mb-80"
            onClick={() => navigate(`/spaces`)}
          >
            <TbArrowLeft color="text-black" size={30} title="back" />
            <p className="text-main font-bold">Back</p>
          </button>
          <h1 className="text-xl text-black w-[70%] font-extrabold mt-32">
            {details?.StationName}
          </h1>
        </div>
        <div className="sanef-wrap">
          <h1 className="text-xl font-semibold mt-40 absolute bottom-0 bg-[#E7F3ED] px-20 py-10 rounded-t-3xl">
            {details?.BannerTitle}
          </h1>
        </div>
      </section>

      <section className="section__vip-progress py-40">
        <div className="sanef-wrap wrap-70">
          <div className="flex mb-40 flexCol">
            <div className="mb-32 inline-block flex-1 w-fit">
              <h1 className="text-xl font-medium mb-2 flex-1">
                {details?.SubTitle}
              </h1>
              <div className="flex items-start justify-start">
                <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
              </div>
            </div>
            <p className="flex-1 text-main leading-[36px] text-justify">
              <Markdown
                options={{
                  overrides: {
                    p: {
                      props: {
                        className: "mb-10",
                      },
                    },
                    img: {
                      props: {
                        className:
                          "w-full blog md:h-[80rem] h-[60rem] object-cover object-top rounded-[4rem] mt-28 mb-3",
                      },
                    },
                    a: {
                      props: {
                        className:
                          "cursor-pointer underline text-[#064ddc] hover:text-[#007639]",
                      },
                    },
                    blockquote: {
                      props: {
                        className:
                          "blog p-10 rounded-r-2xl text-grey my-7 border-s-4 border-gray-300 bg-[#e7e5e4] dark:border-gray-500 dark:bg-gray-800",
                      },
                    },
                  },
                }}
              >
                {details?.Description}
              </Markdown>
            </p>
          </div>
          {details?.BeforeCarousel?.length > 0 && (
            <Slider images={details.BeforeCarousel} label="Before" />
          )}
          {details?.InProgressCarousel?.length > 0 && (
            <Slider images={details.InProgressCarousel} label="During" />
          )}
          {details?.CompletedCarousel?.length > 0 && (
            <Slider images={details.CompletedCarousel} label="Completed" />
          )}
        </div>
      </section>

      <section className="section__direction mb-80">
        <div className="sanef-wrap wrap-70 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <a href="#progress">
              <button
                onClick={handlePreviousSpace}
                className="sm:p-20 p-7 rounded-full border-2 border-solid border-[#00A650]"
              >
                <LeftArrowIcon />
              </button>
            </a>
            <p className="text-[1.6rem] font-medium">Previous</p>
          </div>
          <Button
            href="#"
            onClick={() => navigate(`/spaces`)}
            text="Back to list"
            icon={false}
          />
          <div className="flex items-center gap-10">
            <p className="text-[1.6rem] font-medium">Next</p>
            <a href="#progress">
              <button
                onClick={handleNextSpace}
                className="sm:p-20 p-7 rounded-full border-2 border-solid border-[#00A650]"
              >
                <RightArrowIcon />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Progress;
