import api from "./api";

export async function registerUser({
  fullname,
  phone,
  email,
  password,
  confirmPassword,
}) {
  try {
    const response = await api.post("api/users/register", {
      fullname,
      phone,
      email,
      password,
      confirmPassword,
    });

    return response.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
}

export async function loginUser({ username, password }) {
  try {
    const response = await api.post("login", {
      username,
      password,
    });
    return response.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
}
