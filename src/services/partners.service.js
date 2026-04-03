import { db } from "../libs/supabase";

export const getListPartners = async () => {
    try {
        const { data, error } = await db
            .from('socios')
            .select('*')

        if (error) throw new Error(error);

            return data;
        
    } catch (error) {
        console.error(error);
    }
}