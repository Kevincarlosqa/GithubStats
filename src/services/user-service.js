import { tokenKey } from "../config";
import githubClient from "./githubStats-client";

export async function createUser(userData) {
  const { token, ...user } = await githubClient("/signup", {
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await githubClient("/profile");

  return user;
}

export async function updateUser(userData) {
  const { token, ...user } = await githubClient("/profile", {
    method: "PATCH",
    body: userData,
  });

  return user;
}
