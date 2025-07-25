import {Link} from "react-router-dom";
import React, {useState} from "react";
import {UserSchemas} from "../schemas/UserSchemas";
import Preferencias from "./Preferencias.tsx";

export default function Cadastro() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        birthDate: "",
        brasileira: "",
        japonesa: "",
        chinesa: "",
        italiana: "",
    });
    const [errors, setErrors] = useState<any>({});

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setForm({...form, [e.target.id]: e.target.value});
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const result = UserSchemas.createUser.safeParse({
            name: form.name,
            email: form.email,
            password: form.password,
            gender: form.gender,
            birthDate: form.birthDate,
            brasileira: Number(form.brasileira),
            japonesa: Number(form.japonesa),
            chinesa: Number(form.chinesa),
            italiana: Number(form.italiana),
        });
        if (!result.success) {
            const fieldErrors: any = {};
            result.error.issues.forEach((err) => {
                if (err.path[0]) fieldErrors[err.path[0]] = err.message;
            });
            setErrors(fieldErrors);
        } else {
            setErrors({});
            // Adicionar a requisição de cadastro
            alert("Cadastro realizado com sucesso!");
        }
    }

    return (
        <div className="w-full max-w-xl">
            <form className="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="name">
                            Nome
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="name" type="text" placeholder="Nome" value={form.name} onChange={handleChange}/>
                        {errors.name && <p className="text-red-500 text-xs italic"> {errors.name}</p>}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}/>
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="senha">
                            Senha
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="password" type="password" placeholder="******************" value={form.password}
                            onChange={handleChange}/>
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
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
                                id="gender" value={form.gender} onChange={handleChange}>
                                <option value="">Selecione</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender}</p>}
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
                            id="birthDate" type="date" value={form.birthDate} onChange={handleChange}/>
                        {errors.birthDate && <p className="text-red-500 text-xs italic">{errors.birthDate}</p>}
                    </div>
                </div>

                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-3">Gastronomia</label>
                <Preferencias></Preferencias>
                <div className="flex items-center justify-around">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
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
}