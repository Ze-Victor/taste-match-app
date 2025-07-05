export default function Header() {
    return (
        <nav className="w-full mb-20 flex bg-white p-4 place-content-center">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="text-gray-700 font-semibold text-4xl tracking-tight">Taste Match</span>
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Entrar
                    </button>
                </div>
            </div>
        </nav>
    );
}