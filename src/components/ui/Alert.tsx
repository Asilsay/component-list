import { useAlertStore } from '@/utils/store/useAlertStore';
import { FC } from 'react';
import { FaCheck, FaExclamation, FaInfo, FaQuestion, FaXmark } from 'react-icons/fa6';

export interface AlertType {
  modalName: string;
}

const Alert: FC<AlertType> = ({ modalName }) => {
  const { modalType, judul, text, onClickAction, actionButtonLabel } = useAlertStore();

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
              <form method="dialog">
                <button
                  id="btn-closemodal"
                  className={`w-20  btn ${
                    actionButtonLabel
                      ? 'btn-ghost text-black dark:text-white'
                      : modalType === 'success'
                      ? 'btn-success text-white dark:text-black'
                      : modalType === 'warning'
                      ? 'btn-warning text-white dark:text-black'
                      : modalType === 'error'
                      ? 'btn-accent text-white dark:text-black'
                      : 'btn-info text-white dark:text-black'
                  } rounded-md btn-sm !h-10`}
                >
                  {actionButtonLabel ? 'TUTUP' : 'OK'}
                </button>
              </form>

              {actionButtonLabel ? (
                <form method="dialog">
                  <button
                    id="btn-submit-form"
                    onClick={onClickAction}
                    className={`w-20 btn  ${
                      modalType === 'success'
                        ? 'btn-success'
                        : modalType === 'warning'
                        ? 'btn-warning'
                        : modalType === 'error'
                        ? 'btn-accent'
                        : 'btn-info'
                    } text-white dark:text-black rounded-md btn-sm !h-10`}
                  >
                    {actionButtonLabel}
                  </button>
                </form>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Alert;
