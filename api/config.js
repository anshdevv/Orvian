const { createClient } = require("@supabase/supabase-js");
require("dotenv").config(); // load .env file if you’re using one


const supabaseUrl = 'https://ncluwfzkfvjcturkwtqn.supabase.co'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbHV3ZnprZnZqY3R1cmt3dHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MDY1NjAsImV4cCI6MjA3MzQ4MjU2MH0.5LlFUEvblHr4m3UI7ghxm9A2KLnDqeDWDBZgTZbG-gQ"
 // ⚠️ use service key in backend only
const supabase_secret=process.env.SUPABASE_SERVICE_KEY
const supabase = createClient(supabaseUrl, supabase_secret);

module.exports = supabase;


// const supabase = createClient(supabaseUrl, supabaseKey)
// module.exports = supabase;