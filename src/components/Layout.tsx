import { FC } from 'react';
import Alert from './ui/Alert';

interface Props {
  label: string;
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children, label }) => {
  return (
    <section className="flex flex-col gap-3 items-center justify-center w-full h-screen">
      <Alert modalName="error" />
      <Alert modalName="warning" />
      <Alert modalName="info" />
      <Alert modalName="success" />
      <Alert modalName="question" />
      <p className="text-2xl">{label}</p>
      {children}{' '}
    </section>
  );
};

export default Layout;
