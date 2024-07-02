import supabase from './supabase';

export async function getProject(id) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', 1)
    .single();

  console.log('Oliver Projects', data, error);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
