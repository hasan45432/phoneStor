import React from "react";
import { useCombinedStore } from "@/app/store";
export default function useFetch() {
  const { GETstateData, GETstateResponse } = useCombinedStore();

  const fetchData = async (url) => {
    console.log(url);
    await fetch(url)
      .then(async (res) => {
        console.log(res);
        await GETstateResponse(res);
        return res.json();
      })
      .then(async (data) => {
        console.log(data);
        await GETstateData(data);
      });
  };

  return {  fetchData };
}
