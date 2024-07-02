import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getJob } from '../../services/apiJobs';

export function useJob() {
  const { jobId } = useParams();
  console.log('EXTRA LARGE', jobId);

  const {
    data: job,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['jobs', jobId],
    queryFn: () => getJob(jobId),
    retry: false,
  });

  return { isLoading, error, job };
}
