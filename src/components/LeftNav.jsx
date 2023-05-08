import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);
  return (
    <div className="sm:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] sm:translate-x-[0px] transition-all">
      <div className="px-5 flex flex-col">
        {categories.map((item) => {
          return (
            <>
              <LeftNavMenuItem
                text={item.type === "home" ? "HOME" : item.name}
                icon={item.icon}
                action={() => {}}
                className={`${
                  selectedCategory === item.name ? "bg-black/[0.5]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-black/[0.5]" />}
            </>
          );
        })}
        <hr className="my-5 border-black/[0.5]" />
        <div className="my-5 text-black/[0.8] text-[12px]">
          {" "}
          Clone By : Sahil
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
