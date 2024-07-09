import { create } from 'zustand';

type AlertStore = {
  modalType: string | null;
  judul: string;
  text: string | null;
  type: string;
  actionButtonLabel: string | null;
  onClickAction: (() => void | Promise<void>) | undefined;
  isLoading: boolean | null;

  setModalType: (modalType: string | null) => void;
  setJudul: (judul: string) => void;
  setText: (text: string | null) => void;
  setType: (type: string) => void;
  setActionButtonLabel: (actionButtonLabel: string | null) => void;
  setOnClickAction: (onClickAction: (() => void | Promise<void>) | undefined) => void;
  setIsLoading: (isLoading: boolean | null) => void;
};

export const useAlertStore = create<AlertStore>((set) => {
  return {
    modalType: '',
    judul: '',
    text: null,
    type: '',
    actionButtonLabel: null,
    onClickAction: undefined,
    isLoading: null,

    setModalType: (modalType) => set((state) => ({ ...state, modalType })),
    setJudul: (judul) => set((state) => ({ ...state, judul })),
    setText: (text) => set((state) => ({ ...state, text })),
    setType: (type) => set((state) => ({ ...state, type })),
    setActionButtonLabel: (actionButtonLabel) =>
      set((state) => ({ ...state, actionButtonLabel })),
    setOnClickAction: (onClickAction) => set((state) => ({ ...state, onClickAction })),
    setIsLoading: (isLoading) => set((state) => ({ ...state, isLoading })),
  };
});
