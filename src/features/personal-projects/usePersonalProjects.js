import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPersonalProjects } from '../../services/apiPersonalProjects';

export function usePersonalProjects() {
  const { id } = useParams();

  const {
    data: personalProjects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['personal-projects'],
    queryFn: () => getPersonalProjects(),
    retry: false,
  });

  return { isLoading, error, personalProjects };
}
