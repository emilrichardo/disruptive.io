import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from 'next/router'





export default function Layout({children}) {
    const router = useRouter();
    return(
        <>
            <Header/>
                <div>
                    <Sidebar/>
                    <div className="min-h-full lg:ml-20 " >
                        {children}
                    </div>
                </div>
            {router.pathname != "/" && <Footer className="lg:ml-20 "/>}
        </>
    )
};
