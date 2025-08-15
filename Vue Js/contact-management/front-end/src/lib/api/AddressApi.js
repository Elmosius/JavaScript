export const addressCreate = async (
  token,
  id,
  { street, city, province, country, postal_code },
) => {
  return await fetch(
    `${import.meta.env.VITE_API_URL}/contacts/${id}/addresses`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        street,
        city,
        province,
        country,
        postal_code,
      }),
    },
  );
};
