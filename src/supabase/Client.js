import { createClient } from '@supabase/supabase-js';

//env가 안돼서 월요일에 튜터님에게 갈 예정정
const supabase = createClient(
    // import.meta.env.VITE_APP_SUPABASE_URL, 
    // import.meta.env.VITE_APP_SUPABASE_ANON_KEY
    "https://lvsorpjmmzxxppsdbwmb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2c29ycGptbXp4eHBwc2Rid21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2NzQ3NzYsImV4cCI6MjA1NTI1MDc3Nn0.Rxjk4VwemB-rQSAYr6u5dVZbxChDWuxeJu-AINGOvs4"
);

export default supabase;
