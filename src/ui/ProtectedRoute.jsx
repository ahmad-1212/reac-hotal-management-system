import { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ProtectedRoute({ children, loginPage = false }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // 2. If there is No authenticated user, redirect to the /login
  useEffect(() => {
    // If NOT logged in redirect to login page
    if (!isAuthenticated && !isLoading) navigate("/login");

    // If  logged in redirect to dashboard
    if (isAuthenticated && !isLoading && loginPage) navigate("/dashboard");
  }, [isAuthenticated, isLoading, navigate, loginPage]);

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a USER, render the app

  if (isAuthenticated && !loginPage) return children;
  if (!isAuthenticated && loginPage) return children;
}
