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

const productsID = (set) => ({
  stateProductComments: [],
  getProductComments: (comments) => {
    console.log(comments);
    set((state) => ({
      ...state,
      stateProductComments: comments,
    }));
  },
});

export const useCombinedStore = create((...params) => ({
  ...states(...params),
  ...productsID(...params),
}));
