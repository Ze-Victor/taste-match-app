import { useEffect, useState } from "react";
import ProfileSuggestion from "../components/ProfileSuggestion";
import { MatchDialog } from "../components/MatchDialog"; 

interface Profile {
    id: string;
    name: string;
    age: number;
    imageUrl: string;
}

export default function ProfileSuggestionPage() {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
    const [isMatchOpen, setIsMatchOpen] = useState(false); 

    //Simulando a busca de perfis
    useEffect(() => {
        const fetchedProfiles: Profile[] = [
            { id: "1", name: "Alice", age: 25, imageUrl: "https://randomuser.me/api/portraits/women/44.jpg" },
            { id: "2", name: "Bob", age: 30, imageUrl: "https://randomuser.me/api/portraits/men/44.jpg" },
            { id: "3", name: "Charlie", age: 28, imageUrl: "https://randomuser.me/api/portraits/men/45.jpg" },
        ];
        setProfiles(fetchedProfiles);
    }, []);

    // código para buscar perfis de uma API
    // useEffect(() => {
    //     fetch("https://api.com/profiles")
    //         .then((response) => response.json())
    //         .then((data) => setProfiles(data))
    //         .catch((error) => console.error(error));
    // }, []);

    const handleNextProfile = () => {
        setCurrentProfileIndex((prev) => (prev + 1 < profiles.length ? prev + 1 : 0));
    };

    const handleLike = () => {
        setIsMatchOpen(true); // abre o MatchDialog
    };

    if (profiles.length === 0) {
        return <div className="flex items-center justify-center h-screen">Carregando perfis...</div>;
    }

    const currentProfile = profiles[currentProfileIndex];

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ProfileSuggestion 
                name={currentProfile.name}
                age={currentProfile.age}
                imageUrl={currentProfile.imageUrl}
                onLike={handleLike} 
                onDislike={handleNextProfile}
                onViewProfile={() => alert(`Visualizando perfil de ${currentProfile.name}`)} 
            />
            <MatchDialog open={isMatchOpen} setOpen={setIsMatchOpen} />
        </div>
    );
}