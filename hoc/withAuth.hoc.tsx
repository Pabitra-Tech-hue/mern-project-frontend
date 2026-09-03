import { AuthContext } from "@/contexts/auth.context";
import { Role } from "@/types/global.types";
import { useRouter } from "next/navigation";

import { ComponentType, useContext, useEffect } from "react";
import toast from "react-hot-toast";

const withAuth = <p extends object>(
  Component: ComponentType<p>,
  roles?: Role[],
) => {
  return function protectdComponent(props: p) {
    const { isLoading, user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (isLoading) {
        return;
      }
      if (!isLoading && !user) {
        toast.error("login success");
        router.replace("/login");
        return;
      }
      if (user && roles && !roles.includes(user.role)) {
        toast.error("you can not access this resource");
        router.replace("/");
        return;
      }
    }, [isLoading, user, router]);
    if (isLoading) {
      return null;
    }
    if (isLoading && !user) {
      return null;
    }
    if (user && roles && !roles.includes(user.role)) return null;

    //logic

    return <Component {...props} />;
  };
};
export default withAuth;
