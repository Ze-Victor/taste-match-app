import React from 'react';


interface ProfileSuggestionProps {
  name: string;
  imageUrl: string;
  onLike: () => void;
  onDislike: () => void;
  onViewProfile: () => void;
}

const ProfileSuggestion: React.FC<ProfileSuggestionProps> = ({
  name,
  imageUrl,
  onLike,
  onDislike,
  onViewProfile,
}) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80">
    <img
      src={imageUrl}
      alt={name}
      className="w-40 h-40 object-cover rounded-full border-4 border-pink-400 mb-4"
    />
    <h2 className="text-2xl font-semibold mb-6">{name}</h2>
    <div className="flex gap-4">
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-lg shadow" onClick={onDislike}>Não curtir</button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-lg shadow" onClick={onViewProfile}>Ver perfil</button>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-lg shadow" onClick={onLike}>Curtir</button>
    </div>
  </div>
);

export default ProfileSuggestion;
