import { useEffect } from 'react';

const LoadingPage = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-950/70 z-50">
      <span className="loading loading-spinner"></span>
    </div>
  );
};

export default LoadingPage;
