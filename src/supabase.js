
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://emvabkeljsaitfevrbxs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtdmFia2VsanNhaXRmZXZyYnhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzOTAwMTAsImV4cCI6MjAyODk2NjAxMH0.HXToWhkhVQXdpseXYveD6N_1AVISknO-uE60iYwIDzk'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }