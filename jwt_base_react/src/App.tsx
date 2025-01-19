import './App.css'
import LoginForm from "./features/auth/components/LoginForm.tsx";

const App: React.FC = () => {
    return (
        <div>
            <h1>Application de connexion</h1>
            <LoginForm />
        </div>
    );
};

export default App
