import React, { useState } from "react";
import {login, LoginDto} from "../services/authService.tsx";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const credentials: LoginDto = { username, password };

        try {
            const response = await login(credentials);
            setToken(response.accessToken);
            console.log("Token reçu :", response.accessToken);
        } catch (err) {
            setError("Échec de l'authentification. Vérifiez vos identifiants.");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        Pseudo :
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{ width: "100%" }}
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        Mot de passe :
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ width: "100%" }}
                        />
                    </label>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit" style={{ width: "100%" }}>
                    Se connecter
                </button>
            </form>
            {token && (
                <div style={{ marginTop: "20px" }}>
                    <p>Token :</p>
                    <textarea
                        value={token}
                        readOnly
                        style={{ width: "100%", height: "100px" }}
                    />
                </div>
            )}
        </div>
    );
};

export default LoginForm;
