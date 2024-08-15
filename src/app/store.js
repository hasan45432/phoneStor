import { create } from "zustand";

const states = (set) => ({
  statesResponse: {},
  statesData: [],

  GETstateData: (data) => {
    set((state) => ({
      ...state,
      statesData: data,
    }));
  },
  GETstateResponse: (data) => {
    set((state) => ({
      ...state,
      statesResponse: data,
    }));
  },
});

const productsID = (set) => ({
  stateProductComments: [],
  getProductComments: (comments) => {
    set((state) => ({
      ...state,
      stateProductComments: comments,
    }));
  },
});

const userOrders = (set) => ({
  basket: "",
  getUserOrders: (data) => {
    set((state) => ({
      ...state,
      basket: data,
    }));
  },
});

const searchProduct = (set) => ({
  searchInput: "",
  getSearchValue: (data) => {
    set((state) => ({
      ...state,
      searchInput: data,
    }));
  },
});

const commentName = (set) => ({
  stateCommentName: "",
  getCommentName: (data) => {
    set((state) => ({
      ...state,
      stateCommentName: data,
    }));
  },
});

export const useCombinedStore = create((set) => ({
  ...states(set),
  ...productsID(set),
  ...userOrders(set),
  ...searchProduct(set),
  ...commentName(set),
}));
