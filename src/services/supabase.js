import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://javmgvwiccmwpnhmqyos.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imphdm1ndndpY2Ntd3BuaG1xeW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NDU5MjcsImV4cCI6MjAzNTUyMTkyN30.ISLwPBPSR5bMJo-aPyEBNt_Jzswxx0Mrly0nyZdfExc';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
