import {Link} from "react-router-dom";

export default function Cadastro() {
    return (
        <div className="w-full max-w-xl">
            <form className="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="nome">
                            Nome
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="nome" type="text" placeholder="Nome"/>
                        {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email" type="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="senha">
                            Senha
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="senha" type="password" placeholder="******************"/>
                        {/*<p className="text-gray-600 text-xs italic"></p>*/}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="sexo">
                            Sexo
                        </label>
                        <div className="relative">
                            <select
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="sexo">
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="nascimento">
                            Nascimento
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="nascimento" type="date"/>
                    </div>
                </div>
                <fieldset
                    className="w-full mt-6 px-3 mb-6 md:mb-0 border grid grid-cols-4 gap-2 place-items-center bg-gray-200 p-4 text-gray-700 text-xs font-bold uppercase">
                    <legend>Informe a preferência pelas gastronomias:</legend>
                    <label htmlFor="brasileira">Brasileira:</label>
                    <input className="bg-white p-2 w-1/2" type="number" id="brasileira" name="brasileira" min={0} max={5}/>
                    <label htmlFor="japonesa">Japonesa:</label>
                    <input className="bg-white p-2 w-1/2" type="number" id="japonesa" name="japonesa" min={0} max={5}/>
                    <label htmlFor="chinesa">Chinesa:</label>
                    <input className="bg-white p-2 w-1/2" type="number" id="chinesa" name="chinesa" min={0} max={5}/>
                    <label htmlFor="italiana">Italiana:</label>
                    <input className="bg-white p-2 w-1/2" type="number" id="italiana" name="italiana" min={0} max={5}/>
                </fieldset>
                <div className="flex items-center justify-around">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Cadastrar
                    </button>
                    <Link className="hover:text-blue-700 underline content-baseline" to="">Já tem conta? Login</Link>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2025 Taste Match. Todos os direitos reservados.
            </p>
        </div>
    );
};