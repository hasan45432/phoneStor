import React, { useState, useEffect } from "react";
import { useCombinedStore } from "@/app/store";
export default function usePost() {
  const { GETstateData, GETstateResponse } = useCombinedStore();

  const [dataPost, setData] = useState([]);
  const [responsePost, setResponse] = useState(null);
  const [loadingPost, setLoading] = useState(true); // مقداردهی اولیه به loading
  const [errorPost, setError] = useState(null); // برای مدیریت خطا

  const fetchPost = async (req) => {
    console.log(req);
    await fetch(req.url, {
      method: "POST",
      headers: req.body
        ? {
            "Content-Type": "application/json",
          }
        : {},
      body: req.formData ? req.formData : JSON.stringify(req.body),
    })
      .then(async (res) => {
        console.log(res);
        await GETstateResponse(res);
        return res.json();
      })
      .then(async (data) => {
        console.log(data);
        await GETstateData(data);
        setLoading(false);
      });
  };

  return { loadingPost, errorPost, fetchPost };
}
