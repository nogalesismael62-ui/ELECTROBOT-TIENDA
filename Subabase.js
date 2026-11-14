const SUPABASE_URL = "https://hzcsbnoosssrongzffsa.supabase.co/rest/v1/";

const SUPABASE_ANON_KEY = "sb_publishable_xaYkvNrM_92yZpPPmAibcQ_HWGHhDl5";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log("Conexión con Supabase preparada");
