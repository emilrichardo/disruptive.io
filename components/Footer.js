import Logo from "./Logo";
import NavMain from "./NavMain"

export default function Footer({className}) {
    return(
        <footer className={`${className} bg-dark-black py-8 `}>
            <div className="flex flex-col lg:flex-row justify-between px-8 lg:px-20 py-8">
                <div className="text-light flex items-start">
                    <Logo className=" w-8 mr-4"/>
                    <div>
                        <h5 className=" text-md lg:text-xl">About</h5>
                        <p className="text-gray max-w-sm mt-2 font-light">En Disruptive reinventamos el mundo. Creamos e innovamos de una forma que algunos ni siquiera pueden imaginar y eso nos hace únicos. </p>
                    </div>
                    </div>
                <div className="mt-12 lg:mt-0">
                    <div className="flex justify-center lg:justify-end  items-center">
                        <a href="/" className="hover:scale-125 transition-all">
                            <svg width="44" height="44" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6146 19.0697H11.2263V13.2963H10.0325V11.3072H11.2263V10.1127C11.2263 8.48966 11.9003 7.52432 13.8143 7.52432H15.4081V9.5141H14.4125C13.6673 9.5141 13.6176 9.79218 13.6176 10.3108L13.6146 11.3072H15.4195L15.2085 13.2963H13.6146V19.0697Z" fill="white"/>
                                <circle cx="12.5405" cy="12.5405" r="12.0405" stroke="white"/>
                            </svg>
                        </a>
                        <a href="/" className=" mx-8  hover:scale-125 transition-all">
                            <svg width="44" height="44" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9489 9.20064C17.5479 9.3785 17.1166 9.49866 16.6641 9.55272C17.1261 9.27551 17.4803 8.83724 17.6476 8.31459C17.2152 8.57171 16.7364 8.75762 16.2265 8.85732C15.8186 8.42307 15.2371 8.15134 14.5932 8.15134C13.3573 8.15134 12.3555 9.15279 12.3555 10.3887C12.3555 10.5637 12.3755 10.735 12.4135 10.8982C10.5538 10.8051 8.90514 9.91393 7.80179 8.56039C7.60858 8.89092 7.49865 9.27551 7.49865 9.68566C7.49865 10.4618 7.89346 11.1469 8.4939 11.5476C8.12721 11.5363 7.78243 11.4355 7.48112 11.2678C7.48002 11.2773 7.48002 11.2868 7.48002 11.296C7.48002 12.3807 8.25138 13.2854 9.27512 13.4902C9.08776 13.541 8.8898 13.5688 8.68564 13.5688C8.54174 13.5688 8.40149 13.5545 8.2649 13.5286C8.54941 14.4176 9.37592 15.0647 10.3551 15.0826C9.58885 15.6831 8.62465 16.0406 7.57571 16.0406C7.39529 16.0406 7.21742 16.03 7.04175 16.0092C8.03225 16.6444 9.20828 17.0151 10.472 17.0151C14.5881 17.0151 16.8383 13.6053 16.8383 10.6484C16.8383 10.5513 16.8361 10.4548 16.8321 10.3588C17.27 10.0432 17.6494 9.64914 17.9489 9.20064Z" fill="white"/>
                            <circle cx="12.5405" cy="12.5405" r="12.0405" stroke="white"/>
                            </svg>
                        </a>
                        <a href="/" className="hover:scale-125 transition-all">
                            <svg width="44" height="44" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.10473 11.9427L17.5875 8.17941C17.9098 8.0638 18.2431 8.32302 18.1747 8.63588L16.4682 16.4344C16.3692 16.887 15.7865 17.0825 15.3961 16.7941L13.0208 15.0391L11.6027 16.2491C11.6027 16.2491 11.4411 16.3817 11.2078 16.3984L11.3514 13.9286L16.2695 9.83428C16.2695 9.83428 16.2695 9.63524 15.8568 9.8176L9.93369 13.3151L7.12667 12.5097C6.83177 12.4256 6.81757 12.0457 7.10473 11.9427Z" fill="white"/>
                            <circle cx="12.5405" cy="12.5405" r="12.0405" stroke="white"/>
                            </svg>
                        </a>
                    </div>
                    <NavMain className=" font-title mt-16 lg:mt-0" itemClassName="mx-4"/>

                </div>

            </div>
            <div className="flex flex-col lg:flex-row justify-between text-gray  px-8 lg:px-20 py-6 border-t border-dark-light text-xs text-center lg:text-left">
                <p>Revisa nuestra <a className="text-light">información legal</a> </p>
                <p className="mt-4 lg:mt-0">Disruptivestudio ©. 2022 All rights reserved</p>
            </div>

        </footer>
    )
};
