import { Navigate, Router } from "react-router-dom";
import { useRouter } from "next/navigation";
import useAuth from "../(hooks)/useAuth";
const RequiredAuth = () => {
  const { auth } = useAuth();

  return auth ? <Outlet></Outlet> : <>{useRouter().push("/login")}</>;
};

export default RequiredAuth;
