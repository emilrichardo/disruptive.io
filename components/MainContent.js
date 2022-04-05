export default function MainContent({className, children}) {
    return(
        <main className={` max-w-[1440px] mx-auto  pt-20  px-8 lg:px-24  min-h-[50vh] overflow-x-hidden box-border ${className} `}>
            {children}
        </main>
    )
};
