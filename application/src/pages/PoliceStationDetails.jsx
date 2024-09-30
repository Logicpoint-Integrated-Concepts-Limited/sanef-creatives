/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { GetFromStorage } from "../helpers/Functions";
import { TbArrowLeft } from "react-icons/tb";
import { Button, Slider } from "../components";
import { useEffect, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../assets/svg";
import { PoliceListSkeleton, TextSkeleton } from "../components/Skeleton";

const PoliceStationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const stations = GetFromStorage('station-details');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        if (stations) {
            const filtered = stations?.data?.filter((el) => el?.attributes?.Slug === id);
            if (filtered?.length > 0) {
                setDetails(filtered[0]?.attributes);
            }
        }
    }, []);

    if (!details) {
        return (
            <div className="flex justify-between">
                <PoliceListSkeleton cards={3} />
            </div>
        );
    }

    const beforeImages = details?.BeforeCarousel?.map(el => el?.ImageURL);
    const afterImages = details?.AfterCarousel?.map(el => el?.ImageURL);
    const featureImages = details?.FurnitureCarousel?.map(el => el?.ImageURL);

    const handleNextSpace = () => {
        const nextIndex = (currentIndex + 1) % stations?.data?.length;
        setCurrentIndex(nextIndex);
        setDetails(stations?.data[nextIndex]?.attributes);
    };

    const handlePreviousSpace = () => {
        const prevIndex = (currentIndex - 1 + stations?.data?.length) % stations?.data?.length;
        setCurrentIndex(prevIndex);
        setDetails(stations?.data[prevIndex]?.attributes);
    };

    return (
        <>
            <section className="section__details-ps bg-white h-[70rem] relative section-padding" id="police-details">
                <div className="sanef-wrap">
                    <button className="flex gap-3 items-center mb-80" onClick={() => navigate(`/police-station/list`)}>
                        <TbArrowLeft color="text-black" size={30} title="back" />
                        <p className="text-main ">Back</p>
                    </button>
                    <h1 className="text-xl text-black w-[70%] font-extrabold mt-32">
                        {details?.StationName || <TextSkeleton />}
                    </h1>
                </div>
            </section>

            <section className="section__vip-progress py-40 bg-[#E7F3ED] mb-80">
                <div className="sanef-wrap wrap-70">
                    <div className="flex mb-40 sm:p-32">
                        <p className="w-[30%] wFull none">&nbsp;</p>
                        <p className="flex-1 text-main leading-[36px] text-justify">
                            {details?.Description || <TextSkeleton />}
                        </p>
                    </div>
                    {beforeImages?.length > 0 ? <Slider images={beforeImages} label='Before' />: <></>}
                    {afterImages?.length > 0 ? <Slider images={afterImages} label='After' />: <></>}
                    {featureImages?.length > 0 ? <Slider images={featureImages} label='Furnitures' />: <></>}
                </div>
            </section>

            <section className="section__direction mb-80">
                <div className="sanef-wrap wrap-70 flex justify-between items-center">
                    <div className="flex items-center gap-10">
                        <a href="#police-details">
                            <button onClick={handlePreviousSpace} className="sm:p-20 p-7 rounded-full border-2 border-solid border-[#00A650]">
                                <LeftArrowIcon />
                            </button>
                        </a>
                        <p className="text-[1.6rem]">Previous</p>
                    </div>
                    <Button href='#' onClick={() => navigate(`/police-station/list`)} text="Back to list" icon={false} />
                    <div className="flex items-center gap-10">
                        <p className="text-[1.6rem]">Next</p>
                        <a href="#police-details">
                            <button onClick={handleNextSpace} className="sm:p-20 p-7 rounded-full border-2 border-solid border-[#00A650]">
                                <RightArrowIcon />
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PoliceStationDetails;
