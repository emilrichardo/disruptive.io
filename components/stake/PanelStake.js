import { useState } from "react";

import Button from "../buttons";
import InputForm from "../form/InputForm";
import Logo from "../Logo";
import SlidePanel from "../SlidePanel";

export default function PaneleStake({panelState, panelToggleSwitch}) {
    const [copied, setCopied] = useState(false)

    const walletAdress = "0xd70a9D1c9fDd3D8DD2fb672bB399F7bcA61666bD"

    function clip() {
        setCopied(true)
        navigator.clipboard.writeText(walletAdress);
        setTimeout(() => {
            setCopied(false)
          }, 1500);
      }
    return(
        <SlidePanel state={panelState} toggleSwitch={panelToggleSwitch} className=" !w-full max-w-full ">
            <Button variant="outline" size="sm">Unstake</Button>
            <div className="mt-14">
                <div className="relative">
                    <button className="w-full text-left"  onClick={clip}>
                        <InputForm
                        inputClassName="cursor-pointer w-full"
                        label="Mi wallet"
                        size="sm" value={walletAdress }
                        iconLeft={<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.3991 3.73236C29.3991 9.24113 29.3991 14.7556 29.3991 20.2643C29.3822 20.2984 29.3596 20.3324 29.354 20.3665C29.1512 22.1649 27.5679 23.9974 25.1056 23.9917C18.3668 23.9803 11.628 23.9917 4.88924 23.9803C4.39904 23.9803 3.89194 23.9066 3.42992 23.7534C1.69451 23.1691 0.612694 21.6089 0.607059 19.7424C0.601425 16.5994 0.607059 13.4564 0.607059 10.3134C0.607059 8.28234 0.59579 6.25697 0.607059 4.22593C0.618328 1.97931 2.25232 0.180876 4.47229 0.0447171C5.70623 -0.0290357 6.94581 0.0106773 8.17975 0.0106773C13.8142 0.0106773 19.443 0.00500401 25.0774 0.0106773C26.8974 0.0106773 28.2384 0.833305 29.0272 2.49558C29.2075 2.88136 29.2751 3.31821 29.3991 3.73236ZM27.7144 7.81713C27.7256 7.73203 27.7313 7.6753 27.7313 7.62424C27.7313 6.51227 27.7369 5.39463 27.7313 4.28267C27.7313 4.05574 27.7087 3.8288 27.6524 3.61322C27.3312 2.39913 26.3903 1.69565 25.1 1.69565C18.3725 1.69565 11.6393 1.69565 4.91177 1.69565C3.33413 1.69565 2.26922 2.74521 2.26922 4.32805C2.25795 9.44536 2.25795 14.557 2.27485 19.6743C2.27485 20.0828 2.35937 20.531 2.53404 20.8997C3.0017 21.8926 3.84686 22.3181 4.92868 22.3181C11.6393 22.3124 18.3499 22.3181 25.0605 22.3181C25.2014 22.3181 25.3423 22.3181 25.4831 22.301C26.7002 22.1706 27.6524 21.2174 27.7031 19.992C27.7538 18.7836 27.7256 17.5752 27.7313 16.3668C27.7313 16.3157 27.7144 16.259 27.7031 16.1909C27.5735 16.1909 27.4665 16.1909 27.3538 16.1909C25.4719 16.1909 23.5843 16.2023 21.7024 16.1909C18.9979 16.1682 17.0653 13.8025 17.578 11.17C17.9611 9.21843 19.6627 7.83415 21.7193 7.8228C23.6012 7.81146 25.4888 7.8228 27.3707 7.8228C27.4834 7.81713 27.596 7.81713 27.7144 7.81713ZM27.72 9.49642C26.9481 9.49642 26.21 9.49642 25.4719 9.49642C24.1252 9.5021 22.773 9.4794 21.4263 9.51912C20.3389 9.55316 19.3867 10.4609 19.2007 11.5388C18.9246 13.1444 20.0741 14.4889 21.7475 14.5003C23.6576 14.5116 25.5676 14.5003 27.4777 14.5003C27.5566 14.5003 27.6355 14.4889 27.72 14.4832C27.72 12.8153 27.72 11.1757 27.72 9.49642Z" fill="white"/>
                        <path d="M22.2039 11.1644C22.3842 11.1644 22.5589 11.1587 22.7392 11.1644C23.235 11.1927 23.5844 11.5502 23.5844 12.0097C23.5787 12.4636 23.235 12.8153 22.7561 12.838C22.3842 12.855 22.0067 12.855 21.6349 12.838C21.1559 12.8153 20.8179 12.4465 20.8179 11.9984C20.8235 11.5445 21.1672 11.1984 21.6461 11.1701C21.8321 11.153 22.018 11.1644 22.2039 11.1644Z" fill="white"/>
                        </svg>}
                        />
                    </button>

                    {copied && <span className="absolute text-dark bg-light-light bg-opacity-60 rounded px-4 bottom-4 right-4">Copied</span>}
                </div>
                <div className="py-8 flex">
                    <Logo className="w-10 mr-4" />
                    <div>
                        <h5 className="text-gray text-xs">Available in Wallet</h5>
                        <h4 className="text-2xl font-body font-medium mt-2">79999999.0 <small className=" text-sm">DISR</small></h4>
                    </div>
                </div>
                <div className="flex border-t border-t-light border-opacity-20 pt-8">
                    <div className=" border-r border-r-light border-opacity-20 pr-4">
                        <h5 className="text-gray text-xs">My Stake Balance</h5>
                        <h4 className="text-2xl font-body font-medium mt-2">100.0 <small className=" text-sm">DISR</small></h4>
                    </div>
                    <div className="pl-4">
                        <h5 className="text-gray text-xs">Estimated Reward</h5>
                        <h4 className="text-2xl font-body font-medium mt-2">75% <small className=" text-sm">APR</small></h4>
                    </div>
                </div>
                <div className="pt-6">
                    <InputForm
                    type="number"
                    placeholder="0"
                    />
                    <div className="flex justify-between">
                        <Button className="!px-6" size="sm" variant="primary">Add stake</Button>
                        <Button className="group" size="sm"
                        variant="outline"
                        iconRight={
                            <svg className="mr-6" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_231_381)">
                            <path className="fill-light group-hover:fill-dark" d="M10.4592 0C10.4997 0.0176091 10.5401 0.0352181 10.5805 0.0528272C10.951 0.204265 11.1599 0.581099 11.0959 0.993152C11.0353 1.38055 10.7051 1.67991 10.3144 1.68343C9.80912 1.69047 9.30721 1.68695 8.80193 1.68695C6.80103 1.68695 4.80014 1.68695 2.79924 1.68695C2.05816 1.68695 1.61352 2.14831 1.61352 2.91958C1.61352 6.97319 1.61352 11.0268 1.61352 15.0804C1.61352 15.8517 2.05816 16.313 2.79924 16.313C5.28857 16.313 7.77454 16.313 10.2639 16.313C10.85 16.313 11.2441 16.8624 11.0656 17.4224C10.9578 17.7605 10.6647 17.9929 10.3178 18C10.0112 18.007 9.70133 18.0035 9.39142 18.0035C7.1682 18.0035 4.94161 18.007 2.71839 18.0035C1.39457 17.9965 0.313272 17.0702 0.0538963 15.7108C0.0168426 15.5101 0.00336852 15.3023 0.00336852 15.1015C0 11.0374 0 6.96967 0 2.9055C0 1.40168 0.909499 0.278223 2.32764 0.0281745C2.34786 0.0246527 2.36807 0.0105654 2.38828 0C5.07635 0 7.7678 0 10.4592 0Z" />
                            <path className="fill-light group-hover:fill-dark" d="M12.2311 9.84348C12.1267 9.84348 12.0661 9.84348 12.0021 9.84348C9.97759 9.84348 7.95648 9.84348 5.932 9.84348C5.5143 9.84348 5.20103 9.60399 5.10335 9.21659C4.97197 8.69536 5.3324 8.18118 5.85116 8.16005C6.01958 8.153 6.18801 8.15653 6.35643 8.15653C8.23943 8.15653 10.1224 8.15653 12.0054 8.15653C12.0661 8.15653 12.1267 8.15653 12.2278 8.15653C12.1638 8.08609 12.1267 8.04031 12.0863 7.99804C11.3216 7.19859 10.5536 6.40266 9.79232 5.59969C9.33083 5.11015 9.52621 4.32831 10.146 4.16631C10.4391 4.08883 10.7018 4.16983 10.9174 4.39523C11.1835 4.66993 11.4496 4.94815 11.7157 5.22637C12.7027 6.25827 13.6897 7.29016 14.6767 8.32205C15.1011 8.7658 15.1011 9.2342 14.6733 9.68147C13.4438 10.9705 12.2109 12.2559 10.9814 13.5484C10.7557 13.7844 10.4963 13.9077 10.1797 13.8337C9.87653 13.7633 9.67105 13.566 9.58347 13.2526C9.49252 12.9251 9.57 12.6398 9.79906 12.4003C10.5603 11.6044 11.3216 10.8085 12.0795 10.0125C12.1233 9.96674 12.1638 9.92096 12.2311 9.84348Z" />
                            </g>
                            <defs>
                            <clipPath id="clip0_231_381">
                            <rect width="15" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        }
                        >
                            Disconnect
                        </Button>
                    </div>
                </div>




            </div>


        </SlidePanel>
    )
};
