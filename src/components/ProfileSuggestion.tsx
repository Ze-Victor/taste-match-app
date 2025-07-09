import React from 'react';


interface ProfileSuggestionProps {
    name: string;
    age: number;
    imageUrl: string;
    onLike: () => void;
    onDislike: () => void;
    onViewProfile: () => void;
}

const ProfileSuggestion: React.FC<ProfileSuggestionProps> = ({
                                                                 name,
                                                                 age,
                                                                 imageUrl,
                                                                 onLike,
                                                                 onDislike,
                                                                 onViewProfile,
                                                             }) => (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80">
        <img
            src={imageUrl}
            alt={name}
            className="w-84 h-84 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-2xl font-semibold mb-6 text-left w-full">{name} {age}</h2>
        <div className="flex gap-12">
            <button className="hover:bg-red-500 px-4 py-2 rounded-full text-lg shadow" onClick={onDislike}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
            </button>

            <button className="hover:bg-blue-500 px-4 py-2 rounded-full text-lg shadow" onClick={onViewProfile}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                </svg>
            </button>

            <button className="hover:bg-green-500 px-4 py-2 rounded-full text-lg shadow" onClick={onLike}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                </svg>
            </button>
        </div>
    </div>
);

export default ProfileSuggestion;
