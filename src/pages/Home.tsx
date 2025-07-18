import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, ChatBubbleOvalLeftEllipsisIcon, SparklesIcon } from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Home() {
    const userNavigation = [
        { name: 'Minha conta', href: '/profile' },
        { name: 'Sair', href: '#' },
    ];

    const user = {
        name: 'Usuário Teste',
        email: 'usuario@teste.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/86.jpg',
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex items-center">
                            <Link to="/" className="text-2xl font-bold text-pink-500">
                                Taste Match
                            </Link>
                        </div>
                        <div className="ml-6 flex items-center">
                            <Link
                                to="/ProfileSuggestion"
                                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                                title="Encontrar Pessoas"
                            >
                                <SparklesIcon className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <button
                                type="button"
                                className="ml-4 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                                title="Chat"
                            >
                                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="ml-4 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                                title="Notificações"
                            >
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-4">
                                <div>
                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                                        <span className="sr-only">Abrir menu do usuário</span>
                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {userNavigation.map((item) => (
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="rounded-lg bg-white p-8 shadow-md">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bem-vindo ao Taste Match!</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Nossa plataforma foi criada para conectar pessoas através de uma paixão universal: a comida! No Taste Match, acreditamos que os gostos gastronômicos dizem muito sobre quem somos. Queremos te ajudar a encontrar novas amizades, romances ou simplesmente alguém para explorar aquele restaurante novo na cidade.
                                </p>
                                <p>
                                    <strong>Como funciona?</strong> É simples! Você nos conta sobre seus pratos, restaurantes e tipos de culinária favoritos, e nosso algoritmo inteligente sugere perfis de pessoas com um paladar compatível com o seu. Deslize, combine e comece a conversar!
                                </p>
                                <p>
                                    <strong>Nossa Proposta:</strong> Chega de encontros sem graça! Com o Taste Match, a primeira conversa já tem um delicioso quebra-gelo. Explore um mundo de sabores e conexões significativas. Bom apetite e boa sorte!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}