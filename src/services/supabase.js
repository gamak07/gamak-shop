
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://xkggpdnmxvbxkohatkfk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2dwZG5teHZieGtvaGF0a2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMzE5OTUsImV4cCI6MjA1MDYwNzk5NX0.shwx9LTXDl6qcRsYXCdyVaoYih3dUX8AYnKEUxkundI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase