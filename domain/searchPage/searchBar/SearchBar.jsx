import { BsSearch, BsArrowRight } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="w-[40%] my-0 mx-auto bg-main-bg text-main-bg flex rounded-[5rem] items-center mt-[8rem] mb-[3rem] shadow-shadow">
        <BsSearch className="text-[3rem] py-[0.5rem] px-[0.8rem] cursor-pointer text-icons-color" />
        <input
          className="w-[85%] border-0 outline-[0] p-[2rem] bg-main-bg placeholder:text-icons-color placeholder:text-[1.2rem] text-icons-color"
          type="text"
          placeholder="Type yout keyword..."
        />
        <BsArrowRight className="" />
      </div>
    </div>
  );
};
