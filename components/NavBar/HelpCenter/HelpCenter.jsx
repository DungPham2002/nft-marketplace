import Link from "next/link"

export const HelpCenter = () => {
    const helpCenter = [
        {
            name: "About",
            link: "about"
        },
        {
            name: "Contact Us",
            link: "contact-us"
        },
        {
            name: "Sign Up",
            link: "signUp"
        },
        {
            name: "Log In",
            link: "login"
        },
        {
            name: "Forgot password",
            link: "forgot-password"
        },
    ]
    return (
        <div className="">
            {helpCenter.map((el, i) => (
                <div key={i+1} className="py-2 px-4 transition-all z-[22222] hover:text-shadow-dark ease-in hover:bg-icons-color hover:rounded-[0.3rem]">
                    <Link href={{ pathname: `${el.link}` }}> 
                        {el.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}