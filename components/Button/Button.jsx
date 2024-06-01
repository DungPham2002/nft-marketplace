import React from "react"

export const Button = ({ btnName, handleClick, icon, classStyle, type }) => {
    const buttonClass = "py-[1rem] px-[2rem] bg-icons-color rounded-[2rem] text-shadow-light border-[1px] border-icons-color border-solid cursor-pointer transition-all ease-in shadow-shadow hover:bg-main-bg hover:text-icons-color"
    return (
        <div>
            <button type={type} className={`${buttonClass} ${classStyle}`} onClick={() => handleClick()}>
                {icon} {btnName}
            </button>
        </div>
    )
}