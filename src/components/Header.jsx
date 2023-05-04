import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import ytLogo from "../images/youtube.png";
import ytLogoMobile from "../images/social.png";
import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQuryHandler = (event) => {
    if (
      event?.key === "Enter" ||
      (event === "searchButton" && searchQuery.length > 0)
    ) {
      navigate(`/searchReasult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathName } = useLocation();
  const pageName = pathName?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-12 px-4 md:px-5 bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="YouTube"
          />
          <img className="h-full md:hidden" src={ytLogoMobile} alt="YouTube" />
        </Link>
        <div className="group flex items-center ml-3">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-10 md:group-focus-within-pl-0">
            <div className="w-5 items-center justify-center group-focus-within:md:flex pt-2 pl-1">
              <IoIosSearch className="text-white text-l" />
            </div>
            <input
              type="text"
              className="bg-transparent outline-none text-white pr-3 pl-2 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQuryHandler}
              value={searchQuery}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
