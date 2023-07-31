
export function Navbar() {
    return (
        <div className="bg-gray-100 px-32">
            <nav className='header my-8'>
                <ul className="flex border-b px-5">
                    <h2 className="text-2xl font-semibold mr-8 mt-2">Lando</h2>
                    <li className="-mb-px mr-1">
                        <a className="inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-900 hover:text-gray-400 font-semibold" href="/">Home</a>
                    </li>
                    <li className="mr-1">
                        <a className="inline-block py-2 px-4 text-gray-900 hover:text-gray-400 font-semibold" href="/price">Pricing</a>
                    </li>
                    <li className="mr-1">
                        <a className="inline-block py-2 px-4 text-gray-900 hover:text-gray-400 font-semibold" href="/about_us">About us</a>
                    </li>
                    <li className="mr-1">
                        <a className="inline-block py-2 px-4 text-blue-500 hover:text-blue-300 font-semibold" href="/contact">Contact</a>
                    </li>
                    <div className="ml-auto">
                        <a className="px-2 m-2 rounded-lg hover:text-gray-400" href="/login">
                            Log in
                        </a>
                        <a className="px-2 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg" href="/signup">
                            Sign up
                        </a>
                    </div>
                </ul>
            </nav>
        </div>
    );
}