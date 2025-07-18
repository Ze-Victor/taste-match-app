import { Link } from "react-router-dom";

export default function FistPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">Bem-vindo ao Taste Match!</h1>
            <Link to="/Home" className="bg-blue-500 text-white px-6 py-2 rounded mb-4 hover:bg-blue-600 transition">
                Entrar
            </Link>
            <Link to="/Cadastro" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
                Cadastrar
            </Link>
        </div>
    );
}