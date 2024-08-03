import { create } from "zustand";

const getDataStore = (set) => ({
  getData: [],
  fetchGetData: async () => {
    await fetch()
      .then((response) => response.json())
      .then((data) => set({ getData: data.results }));
  },
});

const postDataStore = (set, get) => ({
  response: "",
  postData: [],

  fetchPostData: async (props) => {
    console.log(props);
    await fetch(props.url, {
      method: "POST",
      body: props.formData,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => set({ postData: data.results }));
  },
});

export const useCombinedStore = create((...params) => ({
  ...getDataStore(...params),
  ...postDataStore(...params),
}));
