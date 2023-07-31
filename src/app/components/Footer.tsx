export function Footer() {
    return (
        <footer className="border-t my-16 mx-32">
            <div className="my-16 flex">
                <div className="w-1/4">
                    <h2 className="text-2xl font-semibold mr-8 mt-2">Lando</h2>
                    <h4>2021 © Lando All <br/>rights reserved.</h4>
                </div>
                <nav className="w-1/4 space-y-2">
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            Home
                        </a>
                    </h2>
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            Pricing
                        </a>
                    </h2>
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            About us
                        </a>
                    </h2>
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            Contact
                        </a>
                    </h2>
                </nav>
                <nav className="w-1/4 space-y-2">
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            Facebook
                        </a>
                    </h2>
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            Instagram
                        </a>
                    </h2>
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            Twitter
                        </a>
                    </h2>
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            Linkedin
                        </a>
                    </h2>
                </nav>
                <nav className="w-1/4 space-y-2">
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            Privacy Policy
                        </a>
                    </h2>
                    <h2>
                        <a className="hover:text-gray-400" href="#">
                            Terms Of Service
                        </a>
                    </h2>
                </nav>
            </div>
        </footer>
    );
}