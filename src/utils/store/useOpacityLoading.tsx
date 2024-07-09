import { create } from 'zustand';

type OpaLoadStore = {
  loadState: boolean;

  setLoadState: (loadState: boolean) => void;
};

export const useOpacityLoading = create<OpaLoadStore>((set) => {
  return {
    loadState: false,

    setLoadState: (loadState) => set((state) => ({ ...state, loadState })),
  };
});
