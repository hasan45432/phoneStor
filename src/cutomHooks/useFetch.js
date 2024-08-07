import React, { useEffect, useState } from "react";

export default function useFetch(
  url,
  method,
  headers = {},
  body = null,
  formData = null
) {
  const [data, setData] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true); // مقداردهی اولیه به loading
  const [error, setError] = useState(null); // برای مدیریت خطا

  const fetchData = async () => {
    await fetch(url, {
      method,
      headers: {
        ...headers,
        ...(body ? { "Content-Type": "application/json" } : {}),
      },
      ...(method === "POST" || method === "DELETE"
        ? { body: formData ? formData : JSON.stringify(body) }
        : {}),
    })
      .then((res) => {
        console.log(res);
        setResponse(res);
        return res.json();
      })
      .then(async (data) => {
        console.log(data);
        await setData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url, method, body, formData]);

  return { data, response, loading, error };
}
