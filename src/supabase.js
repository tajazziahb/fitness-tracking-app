// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// Replace these with your own Supabase project credentials
const supabaseUrl = 'https://awsdvxnbfhojmitwsihh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3c2R2eG5iZmhvam1pdHdzaWhoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODA2MjM2NSwiZXhwIjoyMDQzNjM4MzY1fQ.KNlnjXSXjJVonZVvkYwyewC1vtOmrF7KN09DCmS7Log'

export const supabase = createClient(supabaseUrl, supabaseKey)