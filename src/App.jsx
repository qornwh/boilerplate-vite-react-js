import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import TestView1 from './testView/testView1';
import TestView2 from './testView/testView2';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 인스턴스 생성 (최상단에서 1번만 생성)
const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<TestView1 />} />
          <Route path="/test" element={<TestView2 />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
