import { useNavigate, useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { markdownToTxt } from "markdown-to-txt";

import { TbArrowLeft } from "react-icons/tb";
import { FormatDate, GoBack } from "../helpers/Functions";

import { getNewsDetails } from "../service/API";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../components";

const NewsDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const {
    data,
    isLoading: detailsLoading,
    error,
  } = useQuery({
    queryKey: ["news-details", title],
    queryFn: () => getNewsDetails(title),
  });

  const details = data?.data[0]?.attributes;

  if (detailsLoading) return <Loader />;
  if (error) return <p>Error loading news details</p>;
  return (
    <>
      <section
        className="section__hero-media bg-black h-[70rem] relative section-padding bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, #313136d2, #313136ca),url(${details?.BannerImage})`,
        }}
        id="news-details"
      >
        <div className="sanef-wrap">
          <button className="flex gap-3 items-center mb-80" onClick={GoBack}>
            <TbArrowLeft color="white" size={30} title="back" />
            <p className="text-main text-white">Back</p>
          </button>
          <h1 className="text-x2 md:text-xl text-white w-[100%] md:w-[70%] line-clamp-4 text-balance font-bold md:font-extrabold mt-32">
            {details?.BannerTitle}
          </h1>
        </div>
      </section>

      <section className="section__news bg-[#FFF8F1] section-padding">
        <div className="sanef-wrap">
          <p className="text-x text-[#666666] mb-5">
            {FormatDate(details?.PostedAt) || ""}
          </p>
          <h1 className="text-x2 md:text-xl text-[#007639] font-bold mb-7 text-pretty">
            {details?.Title}
          </h1>
          <p className="text-[2rem] leading-[32px] ">
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
              {details?.Body}
            </Markdown>
          </p>

          <hr className="mt-40 text-grey bg-[#e2e8f0]" />

          <h2 className="text-base text-center w-max mx-auto border-b-4 border-[#33B873] mt-32">
            More Stories
          </h2>

          <div className="flex gap-14 my-32">
            <div className="flex flex-wrap justify-between mb-32">
              {details?.RelatedPosts?.data?.map((news) => (
                <div
                  key={news?.id}
                  className="w-full sm:w-[48.3%] cursor-pointer"
                  onClick={() =>
                    navigate(`/media/news/${news?.attributes?.Title}`)
                  }
                >
                  <img
                    loading="lazy"
                    src={news?.attributes?.BannerImage}
                    alt=""
                    className="w-full mb-10 br-3 h-[50rem] object-cover"
                  />
                  <h2 className="text-main font-semibold line-clamp-1">
                    {news?.attributes?.BannerTitle}
                  </h2>
                  <p className="text-[2rem] mb-14 line-clamp-3">
                    {markdownToTxt(news?.attributes?.Body)}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-[#595959] text-[1.6rem]">
                      {FormatDate(news?.attributes?.PostedAt)}
                    </p>
                    <button className="flex items-center gap-1 text-[1.6rem] text-second">
                      Continue Reading
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3758 13.5587L15.1532 7.84023L9.43467 8.06286"
                          stroke="#00A650"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.45708 16.1597L15.0762 7.92334"
                          stroke="#00A650"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
