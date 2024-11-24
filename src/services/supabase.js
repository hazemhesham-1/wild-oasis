import { createClient } from '@supabase/supabase-js';

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZobW14Z3h0b29kaGJ1aXF5dm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwOTQ3MzUsImV4cCI6MjA0NjY3MDczNX0.18ebHUC3iAk_WRT6xZehZ1y5cu_1Jin2jqjg3e-fGrk";
const SUPABASE_URL = 'https://fhmmxgxtoodhbuiqyvng.supabase.co';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export { SUPABASE_URL };
export default supabase;