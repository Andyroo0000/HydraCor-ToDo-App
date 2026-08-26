import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mylnahqekgswgdjyzwhr.supabase.co';
const supabaseKey = 'sb_publishable_WYP_zrE5VbEsa4GZKd3f3g_ernYwDFj';

export const supabase = createClient(supabaseUrl, supabaseKey);
