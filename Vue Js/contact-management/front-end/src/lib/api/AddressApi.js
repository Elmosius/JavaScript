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

export const addressList = async (token, id) => {
  return await fetch(
    `${import.meta.env.VITE_API_URL}/contacts/${id}/addresses`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  );
};

export const addressDelete = async (token, id_contact, id_address) => {
  return await fetch(
    `${import.meta.env.VITE_API_URL}/contacts/${id_contact}/addresses/${id_address}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    },
  );
};

export const addressDetail = async (token, id_contact, id_address) => {
  return await fetch(
    `${import.meta.env.VITE_API_URL}/contacts/${id_contact}/addresses/${id_address}`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  );
};

export const addressUpdate = async (
  token,
  id_contact,
  id_address,
  { street, city, province, country, postal_code },
) => {
  return await fetch(
    `${import.meta.env.VITE_API_URL}/contacts/${id_contact}/addresses/${id_address}`,
    {
      method: "PUT",
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
