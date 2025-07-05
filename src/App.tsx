import Formulario from "./Formulario.tsx";
import Header from "./Header.tsx";

function App() {
    return (
        <div className="flex flex-col w-full items-center justify-center">
            <Header/>
            <Formulario/>
        </div>
    );
}

export default App;
