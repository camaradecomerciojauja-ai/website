import { db } from "../libs/supabase";

export const login = async (username, password) => {
    try {
        
        const { data, error } = await db.rpc("login_admin", {
            p_username: username,
            p_password: password
        });

        if (error) throw error;

        if (!data || data.length === 0) return { ok: false, message: "Credenciales incorrectas" };

        const user = data[0];

        localStorage.setItem("adminAuth", JSON.stringify(user));

        return { ok: true, user };

    } catch (error) {
        console.error(error);
        return { ok: false, message: error.message, error: error, code: 500 };
    }
}