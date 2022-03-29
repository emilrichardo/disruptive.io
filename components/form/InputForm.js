export default function InputForm({type,placeholder,size, label,className,inputClassName, maxLength,iconRight, iconLeft}) {

    const inputBase = ' w-full tracking-wider block text-lg transition-all duration-200 focus:outline-none  rounded   border-2'
    const inputColor= ' bg-light-200 dark:bg-dark-100  border-light-200 dark:border-dark-100 focus:border-secondary dark:focus:border-secondary placeholder:text-dark-200 dark:placeholder:text-light-500 placeholder:opacity-40 focus:placeholder:opacity-5 dark:autofill:text-primary-lightest '



    const sizes ={
        sm:' px-2 md:px-4 py-1 text-sm',
        default:' px-4 md:px-8 py-2 text-md',
        lg:' px-4  py-2 md:px-10 md:py-4 md:text-lg ',
    }
    return(

        <label className={`${className } block relative my-4 `}>



            {(label != undefined) &&
                <span
                className="mb-1 relative inline-block dark:text-light-darkest  transition-all"
                >
                    {label}
                </span>
            }

            <div className="relative">

                    <input


                    type={type}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    className={` ${inputClassName} ${type == "number" && "!pr-3 !pl-4"} ${inputBase + " "  + inputColor} ${sizes[size] || sizes.default} realtive z-10`}
                    />
                    {iconRight && <span   className="absolute z-0 opacity-70 right-4 top-1/2 -mt-[7px]">{iconRight}</span>}




            </div>



        </label>


    )
};
