import { FC, useEffect } from 'react';
import Alert from './ui/Alert';
import LoadingPage from './ui/LoadingPage';
import { useOpacityLoading } from '@/utils/store/useOpacityLoading';

interface Props {
  label: string;
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children, label }) => {
  const { loadState } = useOpacityLoading();

  const closeAlert = (modalName: string) => {
    const alertElement = document.getElementById(modalName) as HTMLDialogElement | null;
    if (alertElement) {
      alertElement.close();
    }
  };

  useEffect(() => {
    console.log(loadState);
  }, [loadState]);

  return (
    <section className="flex flex-col gap-3 items-center justify-center w-full h-screen">
      {loadState && <LoadingPage />}
      <Alert
        modalName="error"
        onClose={() => closeAlert('error')}
      />
      <Alert
        modalName="warning"
        onClose={() => closeAlert('warning')}
      />
      <Alert
        modalName="info"
        onClose={() => closeAlert('info')}
      />
      <Alert
        modalName="success"
        onClose={() => closeAlert('success')}
      />
      <Alert
        modalName="question"
        onClose={() => closeAlert('question')}
      />
      <p className="text-2xl">{label}</p>
      {children}{' '}
    </section>
  );
};

export default Layout;
