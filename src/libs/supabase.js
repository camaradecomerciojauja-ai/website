import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from "../config/config";

export const db = createClient(SUPABASE_URL, SUPABASE_KEY);