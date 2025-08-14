export const contactCreate = async (
  token,
  { first_name, last_name, email, phone },
) => {
  return await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      phone,
    }),
  });
};
