import { create } from "zustand";

const getDataStore = (set) => ({
  GetResponse: "",
  getDataState: [],

  GetData: async (props) => {
    console.log(props.url);
    try {
      const res = await fetch(props.url);
      console.log(res);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log(data);

      set((state) => ({
        ...state,
        getDataState: data, // به روزرسانی getDataState
      }));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  },
});

const postDataStore = (set, get) => ({
  PostResponse: {},
  postDataState: [],

  PostData: async (props) => {
    console.log(props);
    await fetch(props.url, {
      method: "POST",
      body: props.formData,
    })
      .then((res) => {
        console.log(res);
        set((state) => ({
          ...state,
          PostResponse: res, // به روزرسانی getDataState
        }));
        return res.json();
      })
      .then((data) => set({ postData: data.results }));
  },
});

export const useCombinedStore = create((...params) => ({
  ...getDataStore(...params),
  ...postDataStore(...params),
}));
