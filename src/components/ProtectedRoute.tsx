import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string | string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  const allowedRoles = Array.isArray(requiredRole) ? requiredRole : requiredRole ? [requiredRole] : [];
  const hasAccess = allowedRoles.length === 0 || allowedRoles.includes(user.role ?? '');

  if (!hasAccess) {
    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
