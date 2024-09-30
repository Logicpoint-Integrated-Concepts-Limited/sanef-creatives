import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

// import { useNavigate } from "react-router-dom";
import { markdownToTxt } from "markdown-to-txt";

import { FormatDate } from "../helpers/Functions";

import { getNewsDetails } from "../service/API";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../components";

const HomeNews = ({ newsTitle }) => {
  //   const navigate = useNavigate();

  const {
    data,
    isLoading: detailsLoading,
    error,
  } = useQuery({
    queryKey: ["news-details", newsTitle],
    queryFn: () => getNewsDetails(newsTitle),
  });

  const news = data?.data[0]?.attributes;

  if (detailsLoading) return <Loader />;
  if (error) return <p>Error loading news details</p>;
  return (
    <a
      key={news?.id}
      className="w-full sm:w-[48.3%] cursor-pointer"
      href={`/media/news/${news?.Title}`}
    >
      <AsyncImage
        src={news?.BannerImage}
        alt={"Banner image for news: " + news?.BannerTitle}
        className="w-full mb-10 br-3 h-[50rem] object-cover"
        Transition={Blur}
      />
      <h2 className="text-main font-semibold line-clamp-1">
        {news?.BannerTitle}
      </h2>
      <p className="text-[2rem] mb-14 line-clamp-2">
        {markdownToTxt(news?.Body)}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-[#595959] text-[1.6rem]">
          {FormatDate(news?.PostedAt)}
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
    </a>
  );
};

export default HomeNews;
