export default function SelectForm({size,htmlFor,label,className,inputClassName, children}) {

    const inputBase = ' children:z-10 children:relative relativew-full tracking-wider block text-lg transition-all duration-200 focus:outline-none  rounded   border-2'
    const inputColor= ' bg-primary   border-light-200 dark:border-dark-100 focus:border-secondary dark:focus:border-secondary placeholder:text-dark-200 dark:placeholder:text-light-500 placeholder:opacity-40 focus:placeholder:opacity-5 dark:autofill:text-primary-lightest '

    const sizes ={
        sm : ' px-4 md:pl-6 pr-10 py-2 text-sm',
        default:' px-4 md:px-8 py-2 text-md',
        lg:' px-4  py-2 md:px-10 md:py-4 md:text-lg ',
    }
    return(
        <div className={`${className && className } relative my-4  `}>

            {(label != undefined) &&
                <label
                className="mb-1 relative inline-block dark:text-light-darkest  transition-all"
                htmlFor={htmlFor}
                >
                    {label}
                </label>
            }

            <div className={`${inputClassName && inputClassName}  ${inputBase + " "  + inputColor} relative`}>
                <span className=" absolute right-5 bottom-1/2 -mb-1 ">
                    <svg className="fill-primary-light" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-dark-100 dark:fill-light-500" fillRule="evenodd" clipRule="evenodd" d="M0.327393 1.73995L1.67274 0.260071L6.50007 4.64855L11.3274 0.260071L12.6727 1.73995L6.50007 7.35147L0.327393 1.73995Z" fill="white"/>
                    </svg>
                </span>

                <select
                name={htmlFor}
                className={` ${sizes[size] || sizes.default} relative left-0 top-0  appearance-none w-full `}
                >
                    {children}
                </select>

            </div>




        </div>
    )
};
