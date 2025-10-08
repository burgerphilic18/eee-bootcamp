import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Initialize the Supabase admin client
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const body = await req.json();
    const { bio, linkedin, instagram } = body;
    const { email, name, image } = session.user;

    const localPart = email.split('@')[0].toUpperCase();
    const batchYearPrefix = localPart.substring(2, 4);
    const batchYear = `20${batchYearPrefix}-20${parseInt(batchYearPrefix) + 4}`;

    // --- THE FIX IS HERE ---
    // 1. First, ensure the batch exists in the 'batches' table.
    // An "upsert" will create it if it doesn't exist, or do nothing if it does.
    const { error: batchError } = await supabaseAdmin.from('batches').upsert({
      year: batchYear,
      description: `The EEE batch of ${batchYear}.` // Optional: add a default description
    });

    if (batchError) {
      console.error('Supabase Batch Error:', batchError);
      return new NextResponse(JSON.stringify({ error: 'Failed to ensure batch exists', details: batchError.message }), { status: 500 });
    }
    // --- END OF FIX ---


    // 2. Now that we know the batch exists, insert the student profile.
    const { data, error: studentError } = await supabaseAdmin.from('students').insert({
      id: localPart,
      name,
      email,
      "imageUrl": image,
      bio,
      linkedin_url: linkedin,
      instagram_url: instagram,
      batch_year: batchYear,
    });

    if (studentError) {
      console.error('Supabase Student Insert Error:', studentError);
      return new NextResponse(JSON.stringify({ error: 'Failed to create profile', details: studentError.message }), { status: 500 });
    }

    return new NextResponse(JSON.stringify({ batchYear }), { status: 200 });

  } catch (err) {
    console.error('API Route Error:', err);
    return new NextResponse(JSON.stringify({ error: 'An unexpected error occurred' }), { status: 500 });
  }
}