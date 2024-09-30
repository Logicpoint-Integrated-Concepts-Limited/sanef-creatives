import { useNavigate } from 'react-router-dom';
import { TbArrowLeft } from 'react-icons/tb';
import { useQuery } from '@tanstack/react-query';
import { getPoliceStationStates, getPoliceStationsByStates } from '../service/API';
import { PoliceListSkeleton } from '../components/Skeleton';
import { GoBack, If, SetToStorage } from '../helpers/Functions';
import { Button, Loader } from '../components';
import { useState } from 'react';

const PoliceStationList = () => {
    const { data: states, isLoading } = useQuery({ queryKey: ['police-states'], queryFn: getPoliceStationStates, });

    return (
        <>
            <section className="section__hero-media bg-black sm:h-[70rem] relative section-padding bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, #313136d2, #313136ca),url(${'https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331412/Website%20Assets/dcozhsyktsfcybh3vzf0.jpg'})` }} id="police-list">
                <div className="sanef-wrap">
                    <button className="flex gap-3 items-center mb-80 cursor-pointer" onClick={GoBack}>
                        <TbArrowLeft color="white" size={30} title="back" />
                        <p className="text-main text-white font-bold">Back</p>
                    </button>
                    <h1 className="text-[6.5rem] text-white w-[70%] font-extrabold mt-32">List of Police Stations</h1>
                </div>
            </section>

            {isLoading ? (
                <Loader />
            ) : (
                states?.data?.map((state, index) => (
                    <PoliceStationsByState key={index} state={state} />
                ))
            )}
        </>
    );
};

const PoliceStationsByState = ({ state }) => {
    const [limit, setLimit] = useState(3);
    const { id, attributes: { Name: stateName, BgColor: bgColor, } } = state;
    const navigate = useNavigate();

    const { data: stateStations, isLoading: stateStationsLoading } = useQuery({
        queryKey: ['police-stations-by-state', id, limit],
        queryFn: () => getPoliceStationsByStates(id, limit),
        enabled: !!id,
    });

    return (
        <section className={`section__lists-ps section-padding bg-[${bgColor}] relative z-20`}>
            <div className="sanef-wrap">
                <h1 className="text-base font-medium">{stateName} Police Stations</h1>

                <div className="list mt-40 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-y-20 gap-x-[4rem]">
                    {stateStationsLoading ? (
                        <PoliceListSkeleton cards={30} />
                    ) : (
                        stateStations?.data?.map((station, index) => (
                            <List
                                key={index}
                                name={`${station?.attributes?.StationName}, ${station?.attributes?.Location}`}
                                image={station?.attributes?.AfterCarousel[0]?.ImageURL}
                                id={station?.attributes?.Slug}
                                navigate={navigate}
                                stationList={stateStations}
                            />
                        ))
                    )}
                </div>
                <div className='flex items-center justify-center mt-28'>
                    <If condition={stateStations?.data?.length >= 3 && stateStations?.data?.length !== stateStations?.meta?.pagination?.total}>
                        <Button text='See more' className='' onClick={() => setLimit((prevState) => prevState + 6)} />
                    </If>
                    <If condition={stateStations?.data?.length >= 3 && stateStations?.data?.length === stateStations?.meta?.pagination?.total}>
                        <></>
                    </If>
                </div>
            </div>
        </section>
    );
};

const List = ({ name, image, id, navigate, stationList }) => {
    const handleClick = () => {
        SetToStorage('station-details', stationList);
        navigate(`/police-station/list/${id}`)
    }

    return (
        <div className="list">
            <img src={image} alt="police station" className="h-[35rem] w-full object-cover" loading="lazy" />
            <Button href='#police-details' text={name} className='w-full no-br' onClick={handleClick} />
        </div>
    );
};

export default PoliceStationList;
