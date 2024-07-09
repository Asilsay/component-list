import Layout from '@/components/Layout';
import { useHandleAlertAction } from '@/utils/hooks/useHandleAlertAct';
import { useOpacityLoading } from '@/utils/store/useOpacityLoading';
import { useNavigate } from 'react-router-dom';

type AlertType = 'warning' | 'error' | 'info' | 'success' | 'question';

const AlertPage = () => {
  const handleAlertAction = useHandleAlertAction();
  const { setLoadState } = useOpacityLoading();

  const navigate = useNavigate();

  const handleAlert = async (type: AlertType) => {
    handleAlertAction(type, {
      judul: 'Alert',
      text: `Text ${type}`,
      actionButtonLabel: 'OKE',
      type: '2-func',
      onClickAction: () => {
        dummyFetch();
      },
    });
  };

  const dummyFetch = async () => {
    setLoadState(true);
    setTimeout(() => {
      navigate('/alert');
      setLoadState(false);
    }, 10000);
  };

  const dataAlert: AlertType[] = ['error', 'warning', 'info', 'success', 'question'];

  return (
    <Layout label="AlertPage">
      <div className="flex flex-col p-3 gap-3 items-center justify-center">
        {dataAlert.map((item) => {
          return (
            <button
              id={`btn-alert-${item}`}
              onClick={() => handleAlert(item)}
              className="text-sm btn btn-ghost btn-xs btn-square text-green-400"
            >
              {item}
            </button>
          );
        })}
      </div>
    </Layout>
  );
};

export default AlertPage;
