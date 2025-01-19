const AUTH_API_URL = import.meta.env.VITE_API_URL + "/auth";

export interface LoginDto {
    username: string;
    password: string;
}

export interface AuthResponseDto {
    accessToken: string;
}

export const login: (credentials: LoginDto) => Promise<AuthResponseDto> = async (credentials: LoginDto) => {
    const response = await fetch(`${AUTH_API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    return await response.json();
};
