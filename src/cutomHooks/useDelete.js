import React from "react";
import { useCombinedStore } from "@/app/store";
export default function useDelete() {
  const { GETstateData, GETstateResponse } = useCombinedStore();

  const fetchDelete = async (req) => {
    await fetch(req.url, {
      method: "DELETE",
      body: JSON.stringify(req.body),
    })
      .then((res) => {
        console.log(res);
        GETstateResponse(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        GETstateData(data);
      });
  };

  return { fetchDelete };
}
