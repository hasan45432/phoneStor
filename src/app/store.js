import { create } from "zustand";

const getDataStore = (set) => ({
  GetResponse: {},
  getDataState: [],

  GetData: async (req) => {
    console.log(req.url);

    const res = await fetch(req.url);
    console.log(res);
    set((state) => ({
      ...state,
      GetResponse: res,
    }));

    const data = await res.json();
    console.log(data);

    set((state) => ({
      ...state,
      getDataState: data,
    }));
  },
});

const postDataStore = (set, get) => ({
  PostResponse: {},
  postDataState: [],

  PostData: async (req) => {
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
      .then((res) => {
        console.log(res);
        set((state) => ({
          ...state,
          PostResponse: res,
        }));
        return res.json();
      })
      .then((data) => {
        console.log(data);
        set((state) => ({
          ...state,
          postDataState: data,
        }));
      });
  },
});

const deleteDataStore = (set) => ({
  DeleteResponse: {},
  DeleteDataState: [],

  DeleteData: async (req) => {
    try {
      console.log(req.body);
      const res = await fetch(req.url, {
        method: "DELETE",
        body: JSON.stringify(req.body) ,
      });

      const data = await res.json();
      console.log(data);

      set((state) => ({
        ...state,
        DeleteResponse: res,
        DeleteDataState: data,
      }));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  },
});

export const useCombinedStore = create((...params) => ({
  ...getDataStore(...params),
  ...postDataStore(...params),
  ...deleteDataStore(...params),
}));
