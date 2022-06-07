import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { INFO } from "../../global/constant";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    
    const router = useRouter();
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(router.pathname);
    }, [router])

    return (
        <div>
            <Header />
            { children }
            {
                path !== INFO && <Footer />
            }
        </div>
    )
}

export default Layout;