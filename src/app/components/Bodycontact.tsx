import Image from "next/image";

export function Bodycontact() {
    return (
        <div className="flex">
            <div className="w-1/2">
                <Image src="/logo.png" alt="" className="w-full" width={1024} height={1024} />
            </div>
            <div className="w-1/2">
                <div className="w-full max-w-lg mt-32 px-12">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Digite seu nome" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Digite seu e-mail" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem</label>
                            <textarea id="message" name="message" className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Digite sua mensagem" required></textarea>
                        </div>
                        <div className="">
                            <button type="submit" className="px-4 py-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600">Enviar mensagem</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}