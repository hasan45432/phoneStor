import { create } from "zustand";

const getDataStore = (set) => ({
  GetResponse: {},
  getDataState: [],

  GetData: async (props) => {
    console.log(props.url);

    const res = await fetch(props.url);
    console.log(res);
    set((state) => ({
      ...state,
      GetResponse: res, // به روزرسانی getDataState
    }));

    const data = await res.json();
    console.log(data);

    set((state) => ({
      ...state,
      getDataState: data, // به روزرسانی getDataState
    }));
  },
});

const postDataStore = (set, get) => ({
  PostResponse: {},
  postDataState: [],


  PostData: async (props) => {
    console.log(props);
    await fetch(props.url, {
      method: "POST",
      headers: props.body
        ? {
            "Content-Type": "application/json",
          }
        : {},
      body: props.formData ? props.formData : JSON.stringify(props.body),
    })
      .then((res) => {
        console.log(res);
        set((state) => ({
          ...state,
          PostResponse: res, // به روزرسانی getDataState
        }));
        return res.json();
      })
      .then((data) => {
        console.log(data);
        set((state) => ({
          ...state,
          postDataState: data, // به روزرسانی getDataState
        }));
      });
  },
});

export const useCombinedStore = create((...params) => ({
  ...getDataStore(...params),
  ...postDataStore(...params),
}));
