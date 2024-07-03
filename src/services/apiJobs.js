import supabase from './supabase';

export async function getJob(id) {
  const { data, error } = await supabase
    .from('jobs')
    .select('*, projects(*)')
    .eq('id', id)
    .single();

  console.log('DATA', data);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
