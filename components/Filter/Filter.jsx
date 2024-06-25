import {
    FaFilter,
    FaAngleDown,
    FaAngleUp,
    FaWallet,
    FaRegCalendarAlt
  } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useState, useEffect } from "react";
import { getAllCollection } from "@/api/collection.api";


  
export const Filter = ({newest ,setNewest, highest, setHighest, lowest, setLowest, oldest, setOldest, activeCollection,  setActiveCollection}) => {
  const [filter, setFilter] = useState(false);
  const [collectionList, setCollectionList] = useState([]);

  const openFilter = () => {
      setFilter(!filter);
  };

  const openOldest = () => {
    setOldest(!oldest);
    setNewest(false);
    setHighest(false);
    setLowest(false);
  };

  const openNewest = () => {
    setNewest(!newest);
    setOldest(false);
    setHighest(false);
    setLowest(false);
  };

  const openHighest = () => {
    setHighest(!highest);
    setNewest(false);
    setOldest(false);
    setLowest(false);
  };

  const openLowest = () => {
    setLowest(!lowest);
    setNewest(false);
    setHighest(false);
    setOldest(false);
  };

  useEffect(() => {
      getAllCollection().then((items) => {
          setCollectionList(items);
      });
  }, []);

  return (
      <div className="py-[2rem] px-0">
          <div className="w-[80%] my-0 mx-auto flex items-center justify-between pb-[4rem]">
              <div className="flex gap-[2rem]">
                  {collectionList.map((el, i) => (
                      <button 
                          className={`${"outline-none py-[1rem] px-[1.5rem] rounded-[2rem] border-[1px] border-solid border-main-bg transition-all ease-in text-[1.3rem] cursor-pointer bg-main-bg hover:shadow-shadow hover:text-icons-color hover:border-icons-color"} ${
                          activeCollection == i + 1 ? "shadow-shadow text-icons-color border-icons-color" : ""
                          }`} 
                          key={i + 1} 
                          onClick={() => (activeCollection === i + 1 ? setActiveCollection(0) : setActiveCollection(i + 1))}>

                          {el.name}
                      </button>
                  ))}
              </div>

              <div className="filter_box_right">
                  <div
                      className="border-[1px] border-solid border-icons-color py-[1rem] px-[2rem] rounded-[2rem] text-icons-color shadow-shadow cursor-pointer flex items-center gap-[1rem]"
                      onClick={openFilter}
                  >
                      <FaFilter />
                      <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
                  </div>
              </div>
          </div>

          {filter && (
              <div className="w-[80%] my-0 mx-auto flex py-[2rem] px-0 border-t-[1px] border-t-solid border-t-icons-light">
                  <div className="p-[1rem]">
                      <div
                          className={`${
                              highest ? "bg-icons-color text-main-bg" : "border-[1px] border-solid border-icons-color text-icons-color"
                          } py-[0.5rem] px-[1rem] rounded-[2rem] cursor-pointer flex items-center gap-[0.5rem]`}
                          onClick={openHighest}
                      >
                          <FaWallet /> <span>Highest</span>
                          {highest ? <TiTick /> : <AiFillCloseCircle />}
                      </div>
                  </div>
                  <div className="p-[1rem]">
                      <div
                          className={`${
                              lowest ? "bg-icons-color text-main-bg" : "border-[1px] border-solid border-icons-color text-icons-color"
                          } py-[0.5rem] px-[1rem] rounded-[2rem] cursor-pointer flex items-center gap-[0.5rem]`}
                          onClick={openLowest}
                      >
                          <FaWallet /> <span>Lowest</span>
                          {lowest ? <TiTick /> : <AiFillCloseCircle />}
                      </div>
                  </div>

                  <div className="p-[1rem]">
                      <div
                          className={`${
                              newest ? "bg-icons-color text-main-bg" : "border-[1px] border-solid border-icons-color text-icons-color"
                          } py-[0.5rem] px-[1rem] rounded-[2rem] cursor-pointer flex items-center gap-[0.5rem]`}
                          onClick={openNewest}
                      >
                          <FaRegCalendarAlt /> <span>Newest</span>
                          {newest ? <TiTick /> : <AiFillCloseCircle />}
                      </div>
                  </div>

                  <div className="p-[1rem]">
                      <div
                          className={`${
                              oldest ? "bg-icons-color text-main-bg" : "border-[1px] border-solid border-icons-color text-icons-color"
                          } py-[0.5rem] px-[1rem] rounded-[2rem] cursor-pointer flex items-center gap-[0.5rem]`}
                          onClick={openOldest}
                      >
                          <FaRegCalendarAlt /> <span>Oldest</span>
                          {oldest ? <TiTick /> : <AiFillCloseCircle />}
                      </div>
                  </div>
              </div>
          )}
      </div>
  );
};