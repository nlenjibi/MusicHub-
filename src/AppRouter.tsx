import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Movies from './pages/Movies';
// import CreatePost from './pages/CreatePost';
// Make sure the file exists at the specified path, or update the path if needed


const AppRouter  = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      {/* <Route path="/post" element={<CreatePost />} /> */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;