import Header from "./Header";
import Sidebar from "./Sidebar";
export default function Layout({children}) {
    return(
        <>
            <Header/>
            <div>
                <Sidebar/>
                <>
                    {children}
                </>
            </div>
        </>
    )
};
