import { authcontextprops } from "@/type/ui";
import { useSession } from "next-auth/react";
import React from "react";

const AuthContext = React.createContext<authcontextprops | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {

    const { data: session } = useSession();

    const value: authcontextprops = {
        user: session
            ? {
                username: session.user?.name || "",
                role: "user",
            }
            : null,
        address: "", // belakangan aja fokus ke admin dashboard aja dulu
        isLoggedIn: !!session,
    };

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
}