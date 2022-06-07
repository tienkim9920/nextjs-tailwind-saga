import Link from "next/link";
import { useRouter } from "next/router";
import { LISTENING, READING, SPEAKING, WRITING } from "../../global/constant";

const Header = () => {
    const router = useRouter();
    
    return (
        <div className="wrapper-header">
            <div className="2xl:container m-auto py-2 flex justify-between">
                <Link href="/">
                    <img className="cursor-pointer" src="/assets/LogoHeader.png" width="58.71px" height="43.89px" />
                </Link>
                <div className="flex">
                    <li className={`mt-2 mr-8 ${router.pathname === SPEAKING && 'activeLink'}`}><Link href="/speaking">Speaking</Link></li>
                    <li className={`mt-2 mr-8 ${router.pathname === WRITING && 'activeLink'}`}><Link href="/writing">Writing</Link></li>
                    <li className={`mt-2 mr-8 ${router.pathname === READING && 'activeLink'}`}><Link href="/reading">Reading</Link></li>
                    <li className={`mt-2 mr-8 ${router.pathname === LISTENING && 'activeLink'}`}><Link href="/listening">Listening</Link></li>
                </div>
            </div>
        </div>
    )
}

export default Header;