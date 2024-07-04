import supabase from './supabase';

export async function getProject(id) {
  const { data, error } = await supabase
    .from('projects')
    .select('*, project_tasks(*), project_techs(*)')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
