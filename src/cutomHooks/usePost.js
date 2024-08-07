import React, { useState, useEffect } from "react";

export default function usePost() {
  const [dataPost, setData] = useState([]);
  const [responsePost, setResponse] = useState(null);
  const [loadingPost, setLoading] = useState(true); // مقداردهی اولیه به loading
  const [errorPost, setError] = useState(null); // برای مدیریت خطا

  const fetchPost = async (url, formData, body) => {
    await fetch(url, {
      method: "POST",
      headers: body
        ? {
            "Content-Type": "application/json",
          }
        : {},
      body: formData ? formData : JSON.stringify(body),
    })
      .then((res) => {
        console.log(res);
        setResponse(res);
        return res.json();
      })
      .then(async (data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  };



  return { dataPost, responsePost, loadingPost, errorPost, fetchPost };
}
