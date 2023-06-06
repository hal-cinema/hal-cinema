'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useCustomRouter = () => {
  const router = useRouter();
  const isActive = (pathname: string) => usePathname() === pathname;
  const handlePushRouter = (pathname: string) => {
    router.push(pathname);
  };

  const handleBackRouter = () => router.back();

  return { isActive, handlePushRouter, handleBackRouter };
};
