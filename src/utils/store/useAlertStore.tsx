import { create } from 'zustand';

type AlertStore = {
  modalType: string | null;
  judul: string;
  text: string | null;
  actionButtonLabel: string | null;
  onClickAction: (() => void) | undefined;

  setModalType: (modalType: string | null) => void;
  setJudul: (judul: string) => void;
  setText: (text: string | null) => void;
  setActionButtonLabel: (actionButtonLabel: string | null) => void;
  setOnClickAction: (onClickAction: () => void | undefined) => void;
};

export const useAlertStore = create<AlertStore>((set) => {
  return {
    modalType: '',
    judul: '',
    text: null,
    actionButtonLabel: null,
    onClickAction: undefined,

    setModalType: (modalType) => set((state) => ({ ...state, modalType })),
    setJudul: (judul) => set((state) => ({ ...state, judul })),
    setText: (text) => set((state) => ({ ...state, text })),
    setActionButtonLabel: (actionButtonLabel) =>
      set((state) => ({ ...state, actionButtonLabel })),
    setOnClickAction: (onClickAction) => set((state) => ({ ...state, onClickAction })),
  };
});
