const LogoCard = ({ logo, name, description, color }) => {
  return (
    <div className="w-[20%] bankCard flex flex-col basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/5 justify-center items-center z-30">
      <div
        className={`h-96 w-96 rounded-full flex items-center justify-center shadow-lg mb-16 ${
          color ? color : `bg-white`
        }`}
      >
        <img
          loading="lazy"
          src={logo}
          alt={`${name}`}
          className="w-[80%] h-[80%] object-contain rounded-[30%]"
        />
      </div>

      <p className="text-x text-[#1E1E1E] font-bold uppercase text-center">
        {name}
      </p>

      {description ? (
        <>
          <br />
          <p className="text-[1.8rem] font-regular capitalize text-center">
            {description}
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LogoCard;
