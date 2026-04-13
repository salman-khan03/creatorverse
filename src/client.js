import { createClient } from '@supabase/supabase-js';

const URL = 'https://eoxwvhhzuxnxiprfizdz.supabase.co';
const API_KEY = 'sb_publishable_9CldrhVfvR959KEtyHUS1g_BJzMt7a6';

export const supabase = createClient(URL, API_KEY);
