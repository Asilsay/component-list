import { useAlertStore } from '../store/useAlertStore';

export const useHandleAlertAction = () => {
  const { setModalType, setJudul, setText, setActionButtonLabel, setOnClickAction } =
    useAlertStore();

  const handleAlertAction = (
    action: 'warning' | 'error' | 'info' | 'success' | 'question',
    customData: {
      judul: string;
      text: string | null;
      actionButtonLabel: string | null;
      onClickAction?: () => void;
    }
  ) => {
    if (document) {
      const alertElement = document.getElementById(action) as HTMLDialogElement | null;

      closeAllAlert();

      if (alertElement) {
        alertElement.showModal();
        setModalType(action);
        setJudul(customData.judul);
        setText(customData.text);
        setActionButtonLabel(customData.actionButtonLabel);
        customData.onClickAction && setOnClickAction(customData.onClickAction);
      }
    }
  };

  return handleAlertAction;
};

export const closeAllAlert = () => {
  const warning = document.getElementById('warning') as HTMLDialogElement | null;
  const error = document.getElementById('error') as HTMLDialogElement | null;
  const info = document.getElementById('info') as HTMLDialogElement | null;
  const success = document.getElementById('success') as HTMLDialogElement | null;
  const question = document.getElementById('question') as HTMLDialogElement | null;

  if (warning && error && info && success && question) {
    warning.close();
    error.close();
    info.close();
    success.close();
    question.close();
  }
};
