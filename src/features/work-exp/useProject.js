import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProject } from '../../services/apiProject';

export function useProject() {
  const { projectId } = useParams();

  const {
    data: project,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['projects', projectId],
    queryFn: () => getProject(projectId),
    retry: false,
  });

  return { isLoading, error, project };
}
