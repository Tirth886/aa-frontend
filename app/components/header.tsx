export default function Header() {
    return (
        <header className="relative bg-cover bg-center text-white py-20 bg-black" style={{ height: "400px" }}>
            {/* // backgroundImage: 'url(header_bg.jpg)' */}
            <div className="absolute top-0 left-0 w-full py-4 px-40">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex-1">
                        <img src="logo.png" alt="Logo" className="max-w-full h-auto" />
                    </div>
                    <nav className="flex items-center space-x-4">
                        <a href="/" className="text-white">Home</a>
                        <div className="relative group">
                            <a href="#" className="text-white">About Us</a>
                            <ul className="absolute hidden bg-white bg-opacity-90 p-2 space-y-2 top-full right-0 group-hover:block">
                                <li><a href="#" className="text-black">Opportunites</a></li>
                                <li><a href="#" className="text-black">Services</a></li>
                                <li><a href="#" className="text-black">Partners</a></li>
                            </ul>
                        </div>
                        <a href="/blogs" className="text-white">Blogs</a>
                        <a href="#" className="text-white">Contact US</a>
                    </nav>
                </div>
            </div>
            
        </header>
    );
}