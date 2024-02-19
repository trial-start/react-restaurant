import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
  height: 100vh;
`;

function ProtectedRoute({ children }) {
  // 1. load the authenticated user
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  // 2. if no user then redirecting to /login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3. if the user is loading, show a spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
