import Layout from '@/components/Layout';
import { data } from '@/utils/json/navlink.json';
import useThemeStore from '@/utils/store/useThemeStore';
import { useEffect, useState } from 'react';
import { FaMoon, FaRocket } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

interface routeData {
  id?: number;
  name: string;
  styling: string;
  pack: string;
  navlink: string;
}

const Homepage = () => {
  const [load, setLoad] = useState(false);
  const [routeData, setRouteData] = useState<routeData[]>([]);

  const { toggleTheme } = useThemeStore();

  const navigate = useNavigate();

  useEffect(() => {
    setLoad(true);

    setTimeout(() => {
      setRouteData(data);
      setLoad(false);
    }, 500);
  }, []);

  return (
    <Layout label="HOMEPAGE">
      <div className="md:w-96 lg:w-[768px]">
        <button
          onClick={toggleTheme}
          className="text-sm btn btn-ghost btn-xs"
        >
          <FaMoon />
        </button>

        <table className="static table table-xs lg:table-sm">
          <thead className="bg-gray-900/20 dark:bg-gray-900 dark:text-gray-300">
            <tr>
              <th className="rounded-tl-lg border-b p-2 w-[3%]">No</th>
              <th className="border-b p-2">Halaman</th>
              <th className="border-b p-2 w-[15%] md:table-cell hidden">Style</th>
              <th className="border-b p-2 w-[15%] md:table-cell hidden">Pack</th>
              <th className="rounded-tr-lg border-b p-2 w-[5%] text-center">Link</th>
            </tr>
          </thead>
          <tbody className="bg-base-100/80 dark:bg-gray-800/40">
            {load || (routeData && routeData.length === 0) ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-2"
                >
                  {load && (
                    <span className="loading loading-spinner loading-sm text-neutral"></span>
                  )}
                  {routeData && routeData.length === 0 && !load && (
                    <span className="py-1 inline-block">Belum Ada Data.</span>
                  )}
                </td>
              </tr>
            ) : (
              routeData?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="dark:border-b-gray-600"
                  >
                    <td>{index + 1}</td>
                    <td className="capitalize">{item.name}</td>
                    <td className="hidden md:table-cell capitalize">{item.styling}</td>
                    <td className="hidden md:table-cell capitalize">{item.pack}</td>

                    <td>
                      <div className="flex items-center justify-center">
                        <button
                          id={`btn-navlink-${item.navlink}`}
                          onClick={() => navigate(item.navlink)}
                          className="text-sm btn btn-ghost btn-xs btn-square text-green-400"
                        >
                          <FaRocket />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Homepage;
