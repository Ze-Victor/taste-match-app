export default function Header() {
    return (
        <div className="flex place-content-around w-full mb-20 bg-white p-4 text-white">
            <span className="text-gray-700 font-semibold text-4xl tracking-tight">Taste Match</span>
            <button
                className="lg:flex lg:items-center lg:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Entrar
            </button>
        </div>
    );
}