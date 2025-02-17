import { createClient } from '@supabase/supabase-js';

//env가 안돼서 월요일에 튜터님에게 갈 예정정
const supabase = createClient(
    import.meta.env.VITE_APP_SUPABASE_URL, 
    import.meta.env.VITE_APP_SUPABASE_ANON_KEY
);

export default supabase;
