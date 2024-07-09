import { closeAllAlert } from '@/utils/hooks/useHandleAlertAct';
import { useAlertStore } from '@/utils/store/useAlertStore';
import { FC, useCallback, useEffect } from 'react';
import { FaCheck, FaExclamation, FaInfo, FaQuestion, FaXmark } from 'react-icons/fa6';

export interface AlertType {
  modalName: string;
  onClose?: () => void;
}

const Alert: FC<AlertType> = ({ modalName, onClose }) => {
  const { modalType, judul, text, onClickAction, actionButtonLabel, isLoading, type } =
    useAlertStore();

  const handleEscKey = useCallback(
    (event: { key: string; preventDefault: () => void }) => {
      if (event.key === 'Escape' && isLoading) {
        event.preventDefault(); // Prevent closing the dialog if loading
      }
    },
    [isLoading]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleEscKey]);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <dialog
      id={modalName}
      className="modal"
    >
      <div
        className={`modal-box rounded-2xl w-full sm:w-80 md:w-96 p-1 m-0 dark:bg-gray-900`}
      >
        <div className="flex flex-col items-center gap-2 w-full h-full bg-base-100 dark:bg-gray-800">
          <div
            className={`w-full h-24 bg-base-100 dark:bg-gray-800 rounded-t-2xl flex items-center justify-center`}
          >
            <div
              className={`w-16 h-16 rounded-full ring-8 ring-base100/20 border-4 flex justify-center items-center
          ${
            modalType === 'success'
              ? 'text-primary  border-primary ring-primary/20'
              : modalType === 'warning'
              ? 'text-warning  border-warning ring-warning/20'
              : modalType === 'error'
              ? 'text-accent  border-accent ring-accent/20'
              : 'text-info  border-info ring-info/20'
          }
          
          
          `}
            >
              {modalType === 'success' ? (
                <FaCheck size={45} />
              ) : modalType === 'warning' ? (
                <FaExclamation size={45} />
              ) : modalType === 'error' ? (
                <FaXmark size={45} />
              ) : modalType === 'info' ? (
                <FaInfo size={35} />
              ) : (
                <FaQuestion size={35} />
              )}
            </div>
          </div>

          <div className="w-full h-36 bg-base300 flex flex-col items-center justify-between p-3">
            <div className="text-2xl font-bold text-black dark:text-white text-center">
              {judul}

              <br />

              {text && (
                <p className="text-base font-light text-black dark:text-white text-center">
                  {text}
                </p>
              )}
            </div>

            <div
              className={`flex w-full gap-3 justify-center items-center 
             
          `}
            >
              {type === '1-nothing' ? (
                <ReusableButton
                  id="btn-alert-1-nothing"
                  label={'OKE'}
                  modalType={modalType}
                  isLoading={null}
                  onClick={() => onClose && onClose()}
                  variant="close"
                />
              ) : type === '1-func' ? (
                <ReusableButton
                  id="btn-alert-1-func"
                  actionButtonLabel={actionButtonLabel}
                  modalType={modalType}
                  isLoading={isLoading}
                  onClick={onClickAction}
                  variant="action"
                />
              ) : type === '2-nothing' ? (
                <>
                  <ReusableButton
                    id="btn-alert-2-nothing-cancel"
                    label={'BATAL'}
                    modalType={modalType}
                    isLoading={null}
                    onClick={() => onClose && onClose()}
                    variant="close"
                  />
                  <ReusableButton
                    id="btn-alert-2-nothing-func"
                    actionButtonLabel={actionButtonLabel}
                    modalType={modalType}
                    isLoading={isLoading}
                    onClick={onClickAction}
                    variant="action"
                  />
                </>
              ) : (
                <>
                  <ReusableButton
                    id="btn-alert-2-func-cancel"
                    label={'BATAL'}
                    modalType={modalType}
                    isLoading={null}
                    onClick={() => onClose && onClose()}
                    variant="close"
                  />
                  <ReusableButton
                    id="btn-alert-2-func"
                    actionButtonLabel={actionButtonLabel}
                    modalType={modalType}
                    isLoading={isLoading}
                    onClick={onClickAction}
                    variant="action"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Alert;

interface ReusableButtonProps {
  id: string;
  label?: string;
  modalType: string | null;
  actionButtonLabel?: string | null;
  isLoading: boolean | null;
  onClick?: () => void | Promise<void>;
  variant?: 'close' | 'action';
}

const ReusableButton: FC<ReusableButtonProps> = ({
  id,
  label,
  modalType = 'info',
  actionButtonLabel,
  isLoading,
  onClick,
  variant = 'action',
}) => {
  const { setIsLoading } = useAlertStore();

  const handleClick = async () => {
    if (onClick) {
      setIsLoading(true);
      await onClick();
      setIsLoading(false);
      closeAllAlert();
    } else {
      closeAllAlert();
    }
  };

  const getButtonClasses = () => {
    const baseClasses = 'w-20 btn rounded-md btn-sm !h-10';
    let typeClass = '';
    let txtColor = '';

    switch (modalType) {
      case 'success':
        typeClass = 'btn-success';
        break;
      case 'warning':
        typeClass = 'btn-warning';
        break;
      case 'error':
        typeClass = 'btn-accent';
        break;
      default:
        typeClass = 'btn-info';
    }

    if (variant === 'close') {
      typeClass = 'btn-ghost';
      txtColor = 'text-black dark:text-white';
    } else {
      txtColor = 'text-white dark:text-black';
    }

    return `${baseClasses} ${typeClass} ${txtColor}`;
  };

  return (
    <button
      id={id}
      className={getButtonClasses()}
      disabled={isLoading ?? false}
      onClick={handleClick}
    >
      {isLoading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        actionButtonLabel ?? label ?? 'OKE'
      )}
    </button>
  );
};
