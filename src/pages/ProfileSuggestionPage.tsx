import { useEffect, useState } from "react";
import ProfileSuggestion from "../components/ProfileSuggestion";
import { MatchDialog } from "../components/MatchDialog";
import api from "../services/Api";
import { Link } from "react-router-dom";

interface Profile {
    id: number;
    name: string;
    age: number;
    imageUrl: string;
    preferences: string[];
}

export default function ProfileSuggestionPage() {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
    const [isMatchOpen, setIsMatchOpen] = useState(false);

    //Simulando a busca de perfis
    useEffect(() => {
        api.get("/v1/user")
            .then((response) => {
                console.log("API data:", response.data);
                const formattedProfiles = response.data.map((profile: any, idx: number) => ({
                    id: profile.id,
                    name: profile.name,
                    age: new Date().getFullYear() - new Date(profile.birth_date).getFullYear(),
                    imageUrl: `https://randomuser.me/api/portraits/${idx % 2 === 0 ? 'women' : 'men'}/${(idx % 50) + 1}.jpg`,
                    preferences: profile.preferences.map((p: any) => p.description),
                }));
                setProfiles(formattedProfiles);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleNextProfile = () => {
        setProfiles((prevProfiles) => {
            const newProfiles = prevProfiles.filter((_, idx) => idx !== currentProfileIndex);
            return newProfiles;
        });
        setCurrentProfileIndex(0);
    };

    const handleCloseMatchDialog = () => {
        setIsMatchOpen(false);
        handleNextProfile();
    };

    const handleLike = async () => {
        const userA = 4; // ID do usuário logado (ajuste conforme necessário)
        const userB = profiles[currentProfileIndex].id;

        try {
            const response = await api.get(`/v1/user/match?userA=${userA}&userB=${userB}`);
            const matchPercentage = parseFloat(response.data.match_percentage);
            console.log("Match percentage:", matchPercentage);

            if (matchPercentage >= 50) {
                setIsMatchOpen(true);
            } else {
                handleNextProfile();
            }
        } catch (error) {
            console.error(error);
            handleNextProfile();
        }
    };

    const handleDislike = () => {
        handleNextProfile();
    };

    const handleViewProfile = () => {
        alert(`Visualizando perfil de ${profiles[currentProfileIndex].name}`);
    };

    if (profiles.length === 0) {
        return <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-xl text-gray-500 mb-4">Nenhum perfil disponível no momento.</p>
            <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded">Voltar para home</Link>
        </div>
    }

    const currentProfile = profiles[currentProfileIndex];

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ProfileSuggestion
                name={currentProfile.name}
                age={currentProfile.age}
                imageUrl={currentProfile.imageUrl}
                preferences={currentProfile.preferences}
                onLike={handleLike}
                onDislike={handleDislike}
                onViewProfile={handleViewProfile}
            />
            <MatchDialog open={isMatchOpen} setOpen={handleCloseMatchDialog} />
        </div>
    );
}