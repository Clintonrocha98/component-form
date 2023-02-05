import { useState } from "react";
import { Input } from "./components/input";

const formFields = [
    {
        id: "nome",
        label: "Nome",
        type: "text",
    },
    {
        id: "email",
        label: "Email",
        type: "email",
    },
    {
        id: "senha",
        label: "Senha",
        type: "password",
    },
    {
        id: "cep",
        label: "Cep",
        type: "text",
    },
    {
        id: "rua",
        label: "Rua",
        type: "text",
    },
    {
        id: "numero",
        label: "Numero",
        type: "text",
    },
    {
        id: "bairro",
        label: "Bairro",
        type: "text",
    },
    {
        id: "cidade",
        label: "Cidade",
        type: "text",
    },
    {
        id: "estado",
        label: "Estado",
        type: "text",
    },
];

function App() {
    
    const [form, setForm] = useState(
        formFields.reduce((acc, field) => {
            return { ...acc, [field.id]: "" };
        }, {})
    );

    const [response, setResponse] = useState(null);

    function handleSubmite(event) {
        event.preventDefault();

        fetch("https://ranekapi.origamid.dev/json/api/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }).then((response) => {
            setResponse(response);
        });
    }

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    return (
        <>
            <form onSubmit={handleSubmite}>
                {formFields.map(({ id, label, type }) => (
                    <Input
                        key={id}
                        label={label}
                        type={type}
                        id={id}
                        value={form[id]}
                        onChange={handleChange}
                    />
                ))}

                <button>enviar</button>
                {response && response.ok && <p>Dados enviados com sucesso</p>}
            </form>
            
        </>
    );
}

export default App;
