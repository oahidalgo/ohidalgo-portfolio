import supabase from './supabase';

export async function getJob(id) {
  const { data, error } = await supabase
    .from('jobs')
    .select('*, projects(*, project_techs(*))')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
