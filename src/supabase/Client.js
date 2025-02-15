import { createClient } from '@supabase/supabase-js';

//env가 안돼서 월요일에 튜터님에게 갈 예정정
const supabase = createClient(
    // import.meta.env.VITE_APP_SUPABASE_URL, 
    // import.meta.env.VITE_APP_SUPABASE_ANON_KEY
    "https://fvoinfbnjitrkplgaody.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2b2luZmJuaml0cmtwbGdhb2R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MzQwOTYsImV4cCI6MjA1NTAxMDA5Nn0.NPwbLjNX9rlN0oFpD-nBlccJL6mnwd_pHaKIt_O2drk"
);

export default supabase;
