import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProject } from '../../services/apiProject';

export function useProject() {
  //const { id } = useParams();

  const id = 1;

  const {
    data: project,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['projects', id],
    queryFn: () => getProject(id),
    retry: false,
  });

  return { isLoading, error, project };
}
