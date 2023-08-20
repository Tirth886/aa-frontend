import { getHeaders } from "../apis";
import { IHeader } from "../types";

export default async function Header() {
    const headerRespons: IHeader = await getHeaders();
    return (
        <header className="relative bg-cover bg-center text-white py-20 bg-slate-400" style={{ height: "400px" }}>
            {/* // backgroundImage: 'url(header_bg.jpg)' */}
            <div className="absolute top-0 left-0 w-full py-4 px-40">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex-1">
                        <img src="/favicon.ico" alt="Logo" className="max-w-full h-auto" />
                    </div>
                    <nav className="flex items-center space-x-4">
                        {
                            headerRespons.map((header, index) => (
                                <>
                                    {
                                        header.isSubMenu
                                            ?
                                            <div key={index} className="relative group">
                                                <a href={header.redirection} className="text-white">About Us</a>
                                                <ul key={index} className="absolute hidden bg-white bg-opacity-90 p-2 space-y-2 top-full right-0 group-hover:block">
                                                    {
                                                        (header.subMenu ?? []).map((subHEader, index) => (
                                                            <>
                                                                <li key={index}><a href={subHEader.redirection} className="text-black">{subHEader.menu}</a></li>
                                                            </>

                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                            :
                                            <a key={index} href={header.redirection} className="text-white">{header.menu}</a>
                                    }
                                </>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </header>
    );
}