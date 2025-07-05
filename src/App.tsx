import ProfileSuggestion from './components/ProfileSuggestion';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <ProfileSuggestion
        name="Maria Silva"
        imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
        onLike={() => alert('Curtiu!')}
        onDislike={() => alert('Não curtiu!')}
        onViewProfile={() => alert('Ver perfil completo')}
      />
    </div>
  );
}

export default App;
