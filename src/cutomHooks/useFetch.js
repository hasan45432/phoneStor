import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useCombinedStore } from "@/app/store";
export default function useFetch() {
  const { GETstateData, GETstateResponse } = useCombinedStore();
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true); // مقداردهی اولیه به loading
  const [error, setError] = useState(null); // برای مدیریت خطا

  const fetchData = async (url) => {
    await fetch(url)
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

  return { loading, error, fetchData };
}
