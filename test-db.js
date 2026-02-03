const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase env variables')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function test() {
    const { data, error } = await supabase.from('User').select('*')
    if (error) {
        if (error.code === 'PGRST116' || error.message.includes('relation "User" does not exist')) {
            console.log('Connection successful, but table "User" does not exist yet (as expected).')
        } else {
            console.error('Error connecting to Supabase:', error)
        }
    } else {
        console.log('Connection successful! Data:', data)
    }
}

test()
