import Layout from '@/components/Layout';
import { useHandleAlertAction } from '@/utils/hooks/useHandleAlertAct';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type AlertType = 'warning' | 'error' | 'info' | 'success' | 'question';

const AlertPage = () => {
  const handleAlertAction = useHandleAlertAction();
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleAlert = async (type: AlertType) => {
    handleAlertAction(type, {
      judul: 'Alert',
      text: `Text ${type}`,
      actionButtonLabel: 'ok',
      onClickAction: () => {
        dummyFetch();
      },
    });
  };

  const dummyFetch = () => {
    setLoad(true);
    setTimeout(() => {
      // alert('clicked');
      navigate('/home');
      setLoad(false);
    }, 2000);
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
              disabled={load} // Disable button while loading
            >
              {item}
            </button>
          );
        })}
        {load && <div className="mt-3 text-center">Loading...</div>}{' '}
        {/* Display loading text */}
      </div>
    </Layout>
  );
};

export default AlertPage;
