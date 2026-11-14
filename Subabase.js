const SUPABASE_URL = "PEGA_AQUI_TU_PROJECT_URL";

const SUPABASE_ANON_KEY = "PEGA_AQUI_TU_PUBLISHABLE_KEY";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log("Conexión con Supabase preparada");
