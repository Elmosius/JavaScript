export const userRegister = async ({ username, password, name }) => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      name,
    }),
  });
};

export const userLogin = async ({ username, password }) => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
};

export const userProfile = async (token) => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users/current`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
};

export const userUpdateProfile = async (token, { name }) => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      name,
    }),
  });
};

export const userUpdatePassword = async (token, { password }) => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      password,
    }),
  });
};

export const userLogout = async (token) => {
  return await fetch(`${import.meta.env.VITE_API_URL}/users/logout`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
};
