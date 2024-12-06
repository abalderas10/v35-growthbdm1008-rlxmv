import { useState } from 'react';
import { ApiResponse } from '@/lib/api-types';

interface UseApiState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export function useApi<T>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const execute = async (
    apiCall: () => Promise<ApiResponse<T>>,
    onSuccess?: (data: T) => void,
    onError?: (error: string) => void
  ) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await apiCall();

      if (response.success && response.data) {
        setState({ data: response.data, error: null, loading: false });
        onSuccess?.(response.data);
      } else {
        throw new Error(response.error || 'Operation failed');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setState({ data: null, error: errorMessage, loading: false });
      onError?.(errorMessage);
    }
  };

  return {
    ...state,
    execute,
  };
}