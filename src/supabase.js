import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL,process.env.REACT_APP_SUPABASE_PUBLIC_KEY)

export { supabase }




// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'YOUR_SUPABASE_URL';
// const supabaseKey = 'YOUR_SUPABASE_API_KEY';
// const supabase = createClient(supabaseUrl, supabaseKey);
