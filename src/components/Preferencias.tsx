import React, {useState, useEffect} from 'react';
import {Select, Space} from 'antd';
import api from "../services/Api.ts";

interface Preferencia {
    id: number;
    description: string;
}

const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
};

const App: React.FC = () => {
    const [preferencias, setPreferencias] = useState<Preferencia[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPreferencias = async () => {
            try {
                const response = await api.get('/v1/preferences');
                setPreferencias(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao carregar preferências:', error);
                setLoading(false);
            }
        };

        fetchPreferencias();
    }, []);

    const  options = [];
    let emoji = '';
    for (const preferencia of preferencias) {
        switch (preferencia.id) {
            case 1: emoji = '🍝'; break;
            case 2: emoji = '🍣'; break;
            case 3: emoji = '🥩'; break;
            case 4: emoji = '🦐'; break;
            case 5: emoji = '🥗'; break;
            case 6: emoji = '🧁'; break;
            case 7: emoji = '🍷'; break;
            case 8: emoji = '🍳'; break;
            case 9: emoji = '🍔'; break;
            case 10: emoji = '☕'; break;
        }
        options.push(
            {
                id: preferencia.id,
                label: preferencia.description,
                value: preferencia.id,
                emoji: emoji,
                desc: preferencia.description
            }
        )
    }

    return (
        <Select
            mode="multiple"
            style={{width: '100%'}}
            placeholder="Escolha suas preferências gastronômicas"
            //defaultValue={}
            onChange={handleChange}
            options={options}
            loading={loading}
            optionRender={(option) => (
                <Space>
                    <span role="img" aria-label={option.data.label}>
                        {option.data.emoji}
                    </span>
                    {option.data.desc}
                </Space>
            )}
        />
    );
};

export default App;