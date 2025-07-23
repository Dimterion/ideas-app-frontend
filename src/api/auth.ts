import api from "@/lib/axios";

export const registerUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/auth/register", { name, email, password });

    return res.data;
  } catch (err: any) {
    const message = err.response?.data?.message || "Could not register.";
    throw new Error(message);
  }
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post("/auth/login", credentials);
    return res.data;
  } catch (err: any) {
    const message = err.response?.data?.message || "Could not login.";
    throw new Error(message);
  }
};

export const logoutUser = async () => {
  try {
    await api.post("/auth/logout");
  } catch (err: any) {
    const message = err.response?.data?.message || "Could not logout.";
    throw new Error(message);
  }
};

export const refreshAccessToken = async () => {
  try {
    const res = await api.post("/auth/refresh");
    return res.data;
  } catch (err: any) {
    const message =
      err.response?.data?.message || "Could not refresh access token.";
    throw new Error(message);
  }
};
