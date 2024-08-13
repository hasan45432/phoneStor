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

const userOrders = (set) => ({
  basket: "",
  getUserOrders: (data) => {
    console.log(data);
    set((state) => ({
      ...state,
      basket: data,
    }));
  },
});

const searchProduct = (set) => ({
  searchInput: "",
  getSearchValue: (data) => {
    console.log(data);
    set((state) => ({
      ...state,
      searchInput: data,
    }));
  },
});

export const useCombinedStore = create((set) => ({
  ...states(set),
  ...productsID(set),
  ...userOrders(set),
  ...searchProduct(set),
}));
