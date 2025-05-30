// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Replace these with your own Supabase project credentials
const supabaseUrl ='https://cfvbglqoynlbnizdkuqg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdmJnbHFveW5sYm5pemRrdXFnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODU3Mjc1OCwiZXhwIjoyMDY0MTQ4NzU4fQ.5UiD0_0DPANpXa-dihOPqNTPwgAFWbKxmH1Asdl-hl0'

export const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.signUp({
    email: 'test@example.com',
    password: 'testpassword'
  }).then(console.log)