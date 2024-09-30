import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

import { TbArrowLeft } from "react-icons/tb";
import { FormatDate, GoBack } from "../helpers/Functions";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { getGalleryDetails } from "../service/API";
import { useQuery } from "@tanstack/react-query";
import { Loader, FullModal, FullModalContent } from "../components";

const GalleryDetails = () => {
  const { title } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [fullModalImage, setFullModalImage] = useState("");
  const toggleModal = (fullModalImage) => {
    setFullModalImage(fullModalImage);
    setIsOpen((curr) => !curr);
  };
  const hideModal = () => setIsOpen(false);

  const {
    data,
    isLoading: detailsLoading,
    error,
  } = useQuery({
    queryKey: ["news-details", title],
    queryFn: () => getGalleryDetails(title),
  });

  const details = data?.data[0]?.attributes;

  if (detailsLoading) return <Loader />;
  if (error) return <p>Error loading Gallery details</p>;

  return (
    <div className="bg-[#FFF8F1] mb-40" id="gallery-details">
      <div className="sanef-wrap">
        <div className="flex gap-20 items-center py-20 ">
          <button className="cursor-pointer" onClick={GoBack}>
            <div className="flex gap-3 items-center">
              <TbArrowLeft color="gray" size={20} title="back" />
              <p className="text-[2rem] text-grey">Back</p>
            </div>
          </button>
          <div>
            <h1 className="text-black text-base font-semibold w-full text-pretty">
              {details.Title} &#8212; on {FormatDate(details?.PostedAt)}
            </h1>
            <div className="flex items-start justify-start">
              <div className="line bg-[#00A851] h-[5px] shrink w-[12rem] mt-2"></div>
            </div>
          </div>
        </div>

        <div className="list-image flex flex-wrap justify-between gap-10 gap-y-10 section-padding">
          {details.GallerySubItems?.map((el) => {
            return (
              <div
                key={el.id}
                className="list flex-grow flex-shrink md:w-[30%] w-[48%] max-w-[90rem]"
              >
                <FullModal targetImageURL={el?.ImageURL} onOpen={toggleModal}>
                  <AsyncImage
                    src={el?.ImageURL}
                    className="h-[48rem] w-full object-cover object-top rounded-3xl"
                    Transition={Blur}
                    onError={(e) => console.error("Failed to load image", e)}
                  />
                </FullModal>
              </div>
            );
          })}
        </div>

        <FullModalContent isOpen={isOpen} onClose={hideModal}>
          <img
            loading="lazy"
            src={fullModalImage}
            alt="Gallery image"
            className="h-[90%] object-contain object-center rounded-3xl shadow-md"
          />
        </FullModalContent>
      </div>
    </div>
  );
};

export default GalleryDetails;
