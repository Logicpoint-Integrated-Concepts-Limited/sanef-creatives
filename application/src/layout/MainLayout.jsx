import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import { getHeaderFooterContent } from "../service/API";
import { useQuery } from "@tanstack/react-query";
import { If } from "../helpers/Functions";

import { HashLink } from "react-router-hash-link";
import { TextSkeleton } from "../components/Skeleton";

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Button } from "../components";
import { Link } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["footer-content"],
    queryFn: getHeaderFooterContent,
  });

  const footerCnt = data?.data?.attributes?.Footer;

  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage ? <></> : <Header />}

      <main className="main relative">
        <Outlet />
      </main>

      <footer className="footer bg-[#1C1C20] section-padding z-20 relative">
        <div className="sanef-wrap w-[85%] w-max-[2000px] mx-auto flex justify-between">
          <div className="links w-full flex flex-col items-center lg:px-20">
            <div className="flex mb-20 w-full flexCol gap5">
              <div className="w-[15%]">
                <div className="logo w-[11rem] rounded-lg cursor-pointer">
                  <img
                    src={
                      "https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331351/Website%20Assets/blidjwd8chel8dmtfiwp.jpg"
                    }
                    alt="Logo"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="text-[#ffffffbe] text-[1.5rem] flex-1">
                <h3 className="text-[2.7rem] font-semibold mb-10">
                  {footerCnt?.CompanyName || <TextSkeleton />}
                </h3>
                <ul className="flex flex-col gap-3">
                  {isLoading ? (
                    <TextSkeleton />
                  ) : (
                    <If
                      condition={
                        footerCnt?.Column1 && footerCnt.Column1.length > 0
                      }
                    >
                      {footerCnt?.Column1.map((el, ind) => (
                        <li
                          className="text-[2rem]"
                          key={el.id ?? ind}
                          onClick={() => navigate(`${el?.Link}`)}
                        >
                          <HashLink to="#top">{el?.Label}</HashLink>
                        </li>
                      ))}
                    </If>
                  )}
                </ul>
              </div>
              <div className="text-[#ffffffbe] text-[1.5rem] flex-1">
                <h3 className="mb-10 text-[2.7rem] font-semibold ">
                  Quick Actions
                </h3>
                <ul className="flex flex-col gap-3">
                  {isLoading ? (
                    <TextSkeleton />
                  ) : (
                    <If
                      condition={
                        footerCnt?.Column2 && footerCnt.Column2.length > 0
                      }
                    >
                      {footerCnt?.Column2.map((el, ind) => (
                        <li
                          className="text-[2rem]"
                          key={el.id ?? ind}
                          onClick={() => navigate(`${el?.Link}`)}
                        >
                          <HashLink href="#top">{el?.Label}</HashLink>
                        </li>
                      ))}
                    </If>
                  )}
                </ul>
              </div>
              <div className="text-[#ffffffbe] text-[1.5rem] flex-1">
                <h2 className="mb-10 text-[2.7rem] font-semibold">
                  Contact Us
                </h2>
                {/* <p className='mb-2 w-[50%] text-[2rem]'>{footerCnt?.CompanyAddress || <TextSkeleton />}</p> */}
                {footerCnt?.CompanyAddressList?.map((el) => (
                  <p key={el.id} className="mb-2  text-[2rem]">
                    {el.Text}
                  </p>
                ))}
                <p className="text-[2rem]">
                  {footerCnt?.CompanyPhone || <TextSkeleton />}
                </p>
                <p className="mt-10 underline text-[2rem]">
                  {footerCnt?.CompanyEmail || <TextSkeleton />}
                </p>
              </div>
            </div>

            <h2 className="text-[#ffffffbe] text-[2.7rem] font-semibold mt-24 mb-14 capitalize tracking-wide">
              Follow us on Social Media
            </h2>
            <div className="flex items-center gap-10">
              <Link
                to={`https://www.linkedin.com/company/sanef-nigeria-ltd/`}
                target="_blank"
                className="bg-white p-6 rounded-full"
              >
                <FaLinkedinIn size={30} />
              </Link>
              <Link
                to={`https://www.instagram.com/saneflimited/`}
                target="_blank"
                className="bg-white p-6 rounded-full"
              >
                <FaInstagram size={30} />
              </Link>
              <Link
                to={`https://twitter.com/saneflimited`}
                target="_blank"
                className="bg-white p-6 rounded-full"
              >
                <FaXTwitter size={30} />
              </Link>
              <Link
                to={`https://web.facebook.com/saneflimited`}
                target="_blank"
                className="bg-white p-6 rounded-full"
              >
                <FaFacebookF size={30} />
              </Link>
              <Link
                to={`https://www.youtube.com/c/SANEFNigeria`}
                target="_blank"
                className="bg-white p-6 rounded-full"
              >
                <TfiYoutube size={30} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-40">
          <div className="sanef-wrap flex justify-center border-t-2 border-[#d7d7d787] py-20">
            <p className="text-[2.5rem] text-white">
              © SANEF Creatives Limited . All rights reserved{" "}
            </p>
          </div>

          <div className="flex justify-end sanef-wrap">
            <Button href="#" text="Back To Top" icon={false} className="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
