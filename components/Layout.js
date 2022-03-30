import Header from "./Header";
import Sidebar from "./Sidebar";
export default function Layout({children}) {
    return(
        <>
            <Header/>
            <div >
                <Sidebar/>
                <main className="md:ml-20">
                    {children}
                </main>
            </div>
        </>
    )
};
