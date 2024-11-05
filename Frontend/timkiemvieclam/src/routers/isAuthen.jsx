import { redirect } from "react-router-dom";

export const isAuthen = async () => {
  const token = localStorage.getItem("authToken");
  if (token) throw redirect("/");
  return null;
};
