export default function InputForm({type,placeholder,size, value, label,className,inputClassName, maxLength,iconRight, iconLeft}) {

    function handleChange(event) {

    }

    const inputBase = ' w-full tracking-wider block text-lg transition-all duration-200 focus:outline-none  rounded'
    const inputColor= ' text-gray bg-dark-light   placeholder:text-gray placeholder:opacity-40 focus:placeholder:opacity-5 dark:autofill:text-primary-lightest '



    const sizes ={
        sm:' px-2 md:px-4 py-2 text-sm',
        default:' px-4 md:px-8 py-2 text-md',
        lg:' px-4  py-2 md:px-10 md:py-4 md:text-lg ',
    }
    return(

        <label className={`${className } block relative my-4 `}>



            {(label != undefined) &&
                <span
                className="mb-2 text-xs relative inline-block  text-gray  transition-all"
                >
                    {label}
                </span>
            }

            <div className="relative">
                {iconLeft && <span   className="absolute z-0 opacity-70 left-4  top-1 ">{iconLeft}</span>}

                    <input


                    type={type}
                    onChange={handleChange}
                    value={value}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    className={` ${inputClassName} ${type == "number" && "!pr-3 !pl-4"} ${iconLeft && "!pl-14"} ${inputBase + " "  + inputColor} ${sizes[size] || sizes.default} realtive z-10`}
                    />
                    {iconRight && <span   className="absolute z-0 opacity-70 right-4  top-1">{iconRight}</span>}

            </div>



        </label>


    )
};
