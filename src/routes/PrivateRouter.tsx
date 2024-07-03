import { useUserStore } from '@/store/userStore';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { id } = useUserStore();

  if (!localStorage.getItem('token') || !id) localStorage.clear();
  return localStorage.getItem('token') && id ? <Outlet /> : <Navigate to={'login'} replace />;
};

export default PrivateRouter;
