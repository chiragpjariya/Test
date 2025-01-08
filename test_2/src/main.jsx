import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './components/Home.jsx';

import { BrowserRouter, Route, Routes } from "react-router";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Posts from './components/Posts.jsx';
import SinglePost from './components/SinglePost.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/:postId" element={<SinglePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
