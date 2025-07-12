import Cadastro from "../components/Cadastro.tsx";
import Header from "../components/Header";

export default function Login() {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <Header/>
            <Cadastro/>
        </div>
    );
}