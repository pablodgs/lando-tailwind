
export function Navbar() {
    return (
        <div>
            <nav className='header'>
                <ul className="flex border-b px-5">
                    <h2 className="text-2xl font-semibold mr-8 mt-2">Lando</h2>
                    <li className="-mb-px mr-1">
                        <a className="inline-block border-l border-t border-r rounded-t py-2 px-4 text-black-700 font-semibold" href="#">Home</a>
                    </li>
                    <li className="mr-1">
                        <a className="inline-block py-2 px-4 text-black-500 hover:text-black-800 font-semibold" href="#">Pricing</a>
                    </li>
                    <li className="mr-1">
                        <a className="inline-block py-2 px-4 text-black-500 hover:text-black-800 font-semibold" href="#">About us</a>
                    </li>
                    <li className="mr-1">
                        <a className="inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Contact</a>
                    </li>
                    <div className="ml-auto">
                        <a className="p-1 m-2 rounded-lg" href="#">
                            Login
                        </a>
                        <button className="bg bg-blue-500 text-white p-3 m-1 rounded-lg">
                            Sign up
                        </button>
                    </div>
                </ul>
            </nav>
        </div>
    );
}