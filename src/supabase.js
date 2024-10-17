// src/supabase.js
import { createClient } from '@supabase/supabase-js'

// Replace these with your own Supabase project credentials
const supabaseUrl = 'https://itpcvoduknvlaxkdqhsh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0cGN2b2R1a252bGF4a2RxaHNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTE0NDg2NSwiZXhwIjoyMDQ0NzIwODY1fQ.WDmospwm1jx7WojM1mmQkxZcnz47ZvZzM4f8emG1QVU'

export const supabase = createClient(supabaseUrl, supabaseKey)