import supabase from './supabase';

export async function getPersonalProjects() {
  const { data, error } = await supabase.from('personal_projects').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
