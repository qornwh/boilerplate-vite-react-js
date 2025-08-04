//import '.css'
import { useEffect } from 'react';
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const TestView2 = ({}) => {
  useEffect(() => {
    console.log('mount 시점 실행');
  }, []);

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const res = await axios.get('/api/api/hello');
      console.log(res.data);
      return res.data;
    },
  });

  return <div>testView2</div>;
};

export default TestView2;
