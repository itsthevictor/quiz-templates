import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import SimpleQuiz from "./components/SimpleQuiz";
import BuffedQuiz from "./components/BuffedQuiz";
import RootLayout from "./components/RootLayout";
import SimplePoll from "./components/SimplePoll";
import { pollLoader } from "./components/SimplePoll";
import ComplexSurvey from "./components/ComplexSurvey";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="quiz" element={<SimpleQuiz />} />
      <Route path="buffed-up-quiz" element={<BuffedQuiz />} />
      <Route path="poll" element={<SimplePoll />} loader={pollLoader} />
      <Route path="complex-poll" element={<ComplexSurvey />} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
