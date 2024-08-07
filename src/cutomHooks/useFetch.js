import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useCombinedStore } from "@/app/store";
export default function useFetch() {
  const { get } = useCombinedStore();
  const [data, setData] = useState([]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true); // مقداردهی اولیه به loading
  const [error, setError] = useState(null); // برای مدیریت خطا

  const fetchData = async (url) => {
    await fetch(url)
      .then((res) => {
        console.log(res);
        setResponse(res);
        return res.json();
      })
      .then(async (data) => {
        console.log(data);
        await get(data);
        setLoading(false);
      });
  };

  return { response, loading, error, fetchData };
}
