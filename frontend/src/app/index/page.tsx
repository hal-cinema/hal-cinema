"use client";
import { Header } from "@/components/layouts/header/Header";
import { useCustomRouter } from "@/hooks/useCustomRouter";
import { NextPage } from "next";
import React from "react";
import { useState } from "react";

const Index: NextPage = () => {
  const { isActive } = useCustomRouter();
  return <Header isActive={isActive} />;
};

export default Index;
