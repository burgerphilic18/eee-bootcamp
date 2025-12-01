import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const { data, error } = await supabase
    .from('batches')
    .select('year')
    .limit(1)
    .single();

  if (error) {
    console.error('Supabase Cron Heartbeat Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true, message: 'Supabase heartbeat successful', data });
}