export default function MainContent({className, children}) {
    return(
        <main className={`${className && className} max-w-[1440px] mx-auto  pt-20  px-8 lg:px-24  overflow-x-hidden box-border`}>
            {children}
        </main>
    )
};
