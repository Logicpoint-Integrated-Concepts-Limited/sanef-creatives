import { useLocation, useNavigate } from "react-router-dom";
import { TelephoneIcon } from "../assets/svg";
import { getHeaderFooterContent } from "../service/API";
import { useQuery } from "@tanstack/react-query";
import { If } from "../helpers/Functions";
import { FaAngleDown } from "react-icons/fa6";
import { DropDown } from "../components";
import { HashLink } from "react-router-hash-link";
import { RiMenu5Fill } from "react-icons/ri";
import { useState, useEffect } from "react";

const Header = ({ className = `bg-[#007639]` }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data } = useQuery({
    queryKey: ["header-content"],
    queryFn: getHeaderFooterContent,
  });
  const headerCnt = data?.data?.attributes?.Header;

  // const scrollThreshold = 500;

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.querySelector(
        ".section__hero-home"
      )?.clientHeight;
      setScrolled(window.scrollY > heroSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (link) => {
    navigate(link);
    setOpenNav(false);
  };

  return (
    <header
      className={`header py-5 sticky w-full top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-[#007639]" : className
      } relative transition-colors duration-300`}
    >
      <div className="sanef-wrap">
        <div className="flex items-center justify-between">
          <button
            className="logo w-[10rem] cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <img
              src={
                "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331351/Website%20Assets/blidjwd8chel8dmtfiwp.jpg"
              }
              alt="Logo"
              className="w-full rounded-2xl"
            />
          </button>
          <nav className={`navigation ${openNav ? "openNav" : ""}`}>
            <ul className="flex gap-32 justify-between text-white text-[1.8rem] font-[400]">
              <If
                condition={headerCnt?.MenuItem && headerCnt.MenuItem.length > 0}
              >
                {headerCnt?.MenuItem.map((el, ind) => (
                  <li
                    key={el.id ?? ind}
                    onClick={() => handleNavigation(`${el?.Link}`)}
                  >
                    <HashLink
                      to="#top"
                      className={() => {
                        const isActiveLink = location.pathname === el?.Link;
                        return isActiveLink ? "text-[#FFD539]" : "text-white";
                      }}
                    >
                      {el?.Label}
                    </HashLink>
                  </li>
                ))}
              </If>
              <li className="">
                <If condition={headerCnt?.OurProjects}>
                  <DropDown
                    text={headerCnt?.OurProjects?.Label}
                    title={<FaAngleDown />}
                  >
                    {headerCnt?.OurProjects?.List?.map((el, ind) => (
                      <div key={ind}>
                        <li
                          className="dropItem"
                          onClick={() => handleNavigation(`${el?.Link}`)}
                        >
                          <HashLink to="#top">{el?.Label}</HashLink>
                        </li>

                        <ul className="childrenList">
                          {el?.Children?.map((child, childInd) => (
                            <li
                              className="text-black p-2 text-center flex gap-10 font-light"
                              onClick={() => handleNavigation(`${child?.Link}`)}
                              key={childInd}
                            >
                              <span className="ml-3">-</span>
                              <HashLink to="#top">{child.Label}</HashLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </DropDown>
                </If>
              </li>
              <li
                className=""
                onClick={() =>
                  handleNavigation(`${headerCnt?.MenuItem2?.Link}`)
                }
              >
                <HashLink
                  className={({ isActive }) =>
                    isActive ? "text-[#FFD539]" : "text-white"
                  }
                  to="#top"
                >
                  {headerCnt?.MenuItem2?.Label}
                </HashLink>
              </li>
              <li className="">
                <If condition={headerCnt?.OurTeam}>
                  <DropDown
                    text={headerCnt?.OurTeam?.Label}
                    title={<FaAngleDown />}
                    align=""
                  >
                    {headerCnt?.OurTeam?.List?.map((el, ind) => (
                      <li
                        key={ind}
                        className="dropItem"
                        onClick={() => handleNavigation(`${el?.Link}`)}
                      >
                        <HashLink to={el?.HashLink}>{el?.Label}</HashLink>
                      </li>
                    ))}
                  </DropDown>
                </If>
              </li>
              <li
                className=""
                onClick={() =>
                  handleNavigation(`${headerCnt?.MenuItem3?.Link}`)
                }
              >
                <HashLink
                  className={({ isActive }) =>
                    isActive ? "text-[#FFD539]" : "text-white"
                  }
                  to="#top"
                >
                  {headerCnt?.MenuItem3?.Label}
                </HashLink>
              </li>
            </ul>
          </nav>

          <HashLink to="#top">
            <button
              className="flex py-4 px-7 items-center gap-2 bg-[#CF910D] rounded-full"
              onClick={() => handleNavigation(`${headerCnt?.ContactUs?.Link}`)}
            >
              <p className="text-[1.6rem] text-white mt-1">
                {headerCnt?.ContactUs?.Label}
              </p>
              <TelephoneIcon />
            </button>
          </HashLink>

          <button className="menu-icon" onClick={() => setOpenNav(!openNav)}>
            <RiMenu5Fill size={35} color="white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
