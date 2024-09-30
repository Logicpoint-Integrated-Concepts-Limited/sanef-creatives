import { useNavigate } from "react-router-dom";
import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

import Button from "./Button";
import { useQuery } from "@tanstack/react-query";
import { getNewsList } from "../service/API";
import { useState } from "react";
import Loader from "./Loader";
import { FormatDate, If } from "../helpers/Functions";
// import Markdown from "markdown-to-jsx";
import { markdownToTxt } from "markdown-to-txt";

const News = () => {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);

  const {
    data: news,
    isLoading: newsIsLoading,
    error,
  } = useQuery({
    queryKey: ["news", limit],
    queryFn: () => getNewsList(limit),
  });

  return (
    <div>
      <div className="max-w-full grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-[5rem]">
        {newsIsLoading ? (
          <Loader />
        ) : (
          news?.data?.map((news) => (
            <div
              key={news?.id}
              className="w-full  cursor-pointer"
              onClick={() => navigate(`/media/news/${news?.attributes?.Title}`)}
            >
              <div className="h-[60rem]  mb-10">
                <AsyncImage
                  src={news?.attributes?.BannerImage}
                  alt={
                    "Banner image for news: " + news?.attributes?.BannerTitle
                  }
                  className="w-full br-3 h-full object-cover"
                  Transition={Blur}
                />
              </div>
              <h2 className="text-main font-semibold capitalize line-clamp-1">
                {news?.attributes?.BannerTitle}
              </h2>
              <p className="text-[2rem] mb-14 line-clamp-2">
                {markdownToTxt(news?.attributes?.Body)}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[#595959] text-[1.6rem]">
                  {FormatDate(news?.attributes?.PostedAt)}
                </p>
                <button className="text-[1.6rem] text-second">
                  <a href="#" className="flex items-center gap-1">
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
                  </a>
                </button>
              </div>
            </div>
          ))
        )}
        <If condition={error}>
          <div className="flex justify-center items-center w-full">
            <p className="text-[2rem] mb-14">
              Something went wrong. Please reload your page
            </p>
          </div>
        </If>
        <If condition={news?.data.length < 0}>
          <div className="flex justify-center items-center w-full">
            <p className="text-[2rem] mb-14">No News Here</p>
          </div>
        </If>
      </div>

      <div className="flex justify-center mt-32 mx-auto w-1/6">
        <If
          condition={
            news?.data?.length >= 4 &&
            news?.data?.length !== news?.meta?.pagination?.total
          }
        >
          <Button
            text="See more"
            className="w-full bg-[#03a651] hover:bg-[#2cca78]"
            onClick={() => setLimit((prevState) => prevState + 2)}
          />
        </If>
      </div>
    </div>
  );
};

export default News;

// const singleNews = ({ image, details, time }) => {
//   return (
//     <div className="flex-1">
//       <img loading="lazy" src={image} alt="" className="w-full mb-10" />
//       <p className="text-[2.1rem] mb-14">{details}</p>
//       <div className="flex justify-between items-center">
//         <p className='text-[#595959] text-[1.6rem]'>{time}</p>
//         <button className='flex items-center gap-1 text-[1.6rem] text-second'>
//           Continue Reading
//           <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M15.3758 13.5587L15.1532 7.84023L9.43467 8.06286" stroke="#00A650" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M7.45708 16.1597L15.0762 7.92334" stroke="#00A650" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   )
// }
