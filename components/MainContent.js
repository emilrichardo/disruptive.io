export default function MainContent({className, children}) {
    return(
        <main className={` ${className} md:ml-20  pt-20  px-8 lg:px-24 min-h-full overflow-x-hidden box-border`}>
            {children}
        </main>
    )
};
