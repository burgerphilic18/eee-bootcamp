import { createClient } from '@supabase/supabase-js'

// Get the Supabase URL and Anon Key from your environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// This is a safety check. If the variables are missing, it will stop the app
// and tell you that you need to set them up.
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key in .env.local')
}

// This creates the connection to your Supabase project
export const supabase = createClient(supabaseUrl, supabaseAnonKey)