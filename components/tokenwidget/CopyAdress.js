import React, {useState} from 'react';

export default function CopyClipboard({contract}) {
    const [copied, setCopied] = useState(false)

    function clip() {
        setCopied(true)
        navigator.clipboard.writeText(contract);
        setTimeout(() => {
            setCopied(false)
          }, 1500);
      }

    return(
        <>
            <div className='flex w-full'>
                <input onClick={clip} className=' outline-none bg-gray-dark text-gray text-xs mr-4 w-full box-border overflow-ellipsis' type="text" value={contract} readOnly="readOnly"/>
                <button
                onClick={clip}
                className="copy-button mr-5"
                >
                    <CopyIcon className="w-5" />
                </button>
            </div>

            {copied && <div className='absolute rounded bg-primary p-1'>✓ Copied</div>}
        </>
    )
};
export function CopyIcon({className}){
    return(
        <svg className={`${className}`}  viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M7.40807 14.3101H3.86915C2.95483 14.3101 2.21387 13.5692 2.21387 12.6549V4.04053C2.21387 3.12621 2.95483 2.38525 3.86915 2.38525H12.4835C13.3978 2.38525 14.1387 3.12621 14.1387 4.04053V7.50641" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M17.7506 19.5773H9.13673C8.22241 19.5773 7.48145 18.8364 7.48145 17.9221V9.30775C7.48145 8.39343 8.22241 7.65247 9.13673 7.65247H17.751C18.6654 7.65247 19.4063 8.39343 19.4063 9.30775V17.9221C19.4063 18.8364 18.6649 19.5773 17.7506 19.5773Z" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>

        </svg>


    )
}
