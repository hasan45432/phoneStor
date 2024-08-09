import { create } from "zustand";



const states = (set) => ({
  statesResponse: {},
  statesData: [],

  GETstateData: (data) => {
    console.log(data);

    set((state) => ({
      ...state,
      statesData: data,
    }));
  },
  GETstateResponse: (data) => {
    console.log(data);

    set((state) => ({
      ...state,
      statesResponse: data,
    }));
  },
});


export const useCombinedStore = create((...params) => ({
  ...states(...params),
}));
