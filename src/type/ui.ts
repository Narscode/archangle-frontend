export interface User {
    username: string;
    role: string;
}

export interface authcontextprops {
    user: User | null;
    address: string;
    isLoggedIn: boolean;
}