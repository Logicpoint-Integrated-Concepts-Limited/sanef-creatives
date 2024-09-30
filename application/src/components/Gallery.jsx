import { useNavigate } from "react-router-dom";

import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

import Button from "./Button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getGalleryList } from "../service/API";
import Loader from "./Loader";
import { FormatDate, If } from "../helpers/Functions";
import { computeImageWidth } from "../helpers/Utils";

const Gallery = () => {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(6);

  const { data, isLoading, error } = useQuery({
    queryKey: ["gallery", limit],
    queryFn: () => getGalleryList(limit),
  });

  const structuredData = data?.data;

  return (
    <div className="" id="media?tab=1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
        {/** lg:grid-cols-3 */}
        {isLoading ? (
          <Loader />
        ) : (
          structuredData?.map?.((el, idx, array) => {
            const { width } = computeImageWidth(idx, array);
            const colSpan =
              width === 1
                ? "col-span-1"
                : width === 2
                ? "col-span-1" // lg:col-span-2
                : "col-span-full";

            return (
              <div key={idx} className={`${colSpan}`}>
                <button
                  className="h-[50rem] w-full relative text-left"
                  onClick={() =>
                    navigate(`/media/gallery/${el?.attributes?.Title}`)
                  }
                >
                  <AsyncImage
                    src={el?.attributes?.CoverImage}
                    alt={"Gallery cover image for" + el?.attributes?.Title}
                    className="h-full w-full object-cover object-center rounded-[4rem] brightness-75"
                    Transition={Blur}
                  />
                  <div className="absolute top-[50%] left-[10%]">
                    <h1 className="text-white text-base font-semibold mb-6 w-2/3 text-pretty line-clamp-3">
                      {el?.attributes?.Title}
                    </h1>
                    <p className="text-white text-x">
                      {FormatDate(el?.attributes?.PostedAt)}
                    </p>
                  </div>
                </button>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-center">
        <If
          condition={
            structuredData?.length >= 6 &&
            structuredData?.length !== structuredData?.pagination?.total
          }
        >
          <Button
            text="View more"
            className=""
            onClick={() => setLimit((prevState) => prevState + 2)}
          />
        </If>
        <If
          condition={
            structuredData?.length >= 6 &&
            structuredData?.length === structuredData?.pagination?.total
          }
        >
          <></>
        </If>
      </div>

      <If condition={error}>
        <div className="flex justify-center items-center w-full">
          <p className="text-[2rem] mb-14">
            Something went wrong. Please reload your page
          </p>
        </div>
      </If>
      <If condition={structuredData?.length < 0}>
        <div className="flex justify-center items-center w-full">
          <p className="text-[2rem] mb-14">No Gallery Here</p>
        </div>
      </If>
    </div>
  );
};

export default Gallery;
