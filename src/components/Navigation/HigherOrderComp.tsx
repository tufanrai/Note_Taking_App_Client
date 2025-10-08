"use client";
import React, { ReactElement, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { jwtDecode, JwtPayload } from "jwt-decode";
import toast from "react-hot-toast";

export function HigherOrderComp<T>(Component: React.ComponentType<T>) {
  return function Authorised(props: any) {
    const token = Cookies.get("ticket") ?? "";
    const router = useRouter();
    useEffect(() => {
      try {
        const validatedToken = jwtDecode<JwtPayload>(token, {});
        console.log(
          "This is the response of the validateToken:",
          validatedToken
        );

        const currentTime = Math.floor(Date.now() / 1000);

        if (validatedToken.exp && validatedToken.exp < currentTime) {
          toast.error("Session expired : Please Login again");
          router.replace("/auth/login");
        }
      } catch (err: any) {
        toast.error("Session expired : Please Login");
        console.log(err);
        router.replace("/auth/login");
      }
    }, []);

    return <Component {...props} />;
  };
}
