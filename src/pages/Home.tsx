import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <h1 className="text-4xl font-bold mb-8 text-white">Bem-vindo ao Taste Match!</h1>
            <Link to="/Login" className="bg-green-500 text-white px-4 py-2 rounded mb-4">Ir para Login</Link>
            <Link to="/Match" className="bg-blue-500 text-white px-4 py-2 rounded">Ir para Match</Link>
        </div>
    );
}