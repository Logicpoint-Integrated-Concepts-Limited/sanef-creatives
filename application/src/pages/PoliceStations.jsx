import { Stations } from "../helpers/Constant"

const PoliceStations = () => {
    return (
        <>
            <section className="section_stations-hero section-padding bg-white">
                <div className="sanef-wrap">

                </div>
            </section>
            <section className="section_stations section-padding bg-[#F9F9F9]">
                <div className="sanef-wrap">
                    <h1 className="text-base font-medium mb-20">List of Police stations</h1>
                    <h2 className="text-base font-semibold">Lagos State</h2>

                    <div className="stations flex items-center justify-between flex-wrap mt-56">
                        {Stations.map((el, i) => (
                            <div key={i} className="w-[33%] stations-items text-[#007639] mb-24">
                                <p className="text-x font-semibold">{el.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}

export default PoliceStations

