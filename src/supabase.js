// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Replace these with your own Supabase project credentials
const supabaseUrl ='https://gpjmrljpceybdqsqjimr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwam1ybGpwY2V5YmRxc3FqaW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4ODc3NjksImV4cCI6MjA3MzQ2Mzc2OX0.P3sKBCcKw6fbfnAE61T7jeB45yMOaI6TfJt7ORs42_E'

export const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.signUp({
    email: 'test@example.com',
    password: 'testpassword'
  }).then(console.log)