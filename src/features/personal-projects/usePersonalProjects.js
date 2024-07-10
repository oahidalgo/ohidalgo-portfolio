import { useQuery } from '@tanstack/react-query';
import { getPersonalProjects } from '../../services/apiPersonalProjects';

export function usePersonalProjects() {
  const {
    data: personalProjects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['personal_projects'],
    queryFn: () => getPersonalProjects(),
    retry: false,
  });

  return { isLoading, error, personalProjects };
}
