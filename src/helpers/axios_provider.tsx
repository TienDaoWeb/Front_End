import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useEffect, useRef } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import VTICKET_API_SERVICE_INFOS from '../configs/api_infos'; // Đã là một chuỗi URL
// import { APP_ENV } from '../configs/app_config';

function AxiosProvider() {
  const requestInterceptorId = useRef<number | null>(null);
  const responseInterceptorId = useRef<number | null>(null);
  const navigate = useNavigate();

  const refreshAccessToken = async (): Promise<string | null> => {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) {
      return null;
    }

    try {
      const response = await axios.post<{ status: number; data: { access: string; refresh: string } }>(
        `${VTICKET_API_SERVICE_INFOS}/token/refresh`,
        { refresh }
      );

      if (response.data.status === 1) {
        localStorage.setItem('access', response.data.data.access);
        localStorage.setItem('refresh', response.data.data.refresh);
        return response.data.data.access;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    // Thiết lập interceptor cho các yêu cầu
    requestInterceptorId.current = axios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const accessToken = localStorage.getItem('access');
        if (accessToken) {
          config.headers = config.headers || {};
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Thiết lập interceptor cho các phản hồi
    responseInterceptorId.current = axios.interceptors.response.use(
      async (response: AxiosResponse) => {
        const { status, data } = response;
        if (status === 200 && data) {
          const customStatus = data.status;
          switch (customStatus) {
            case 1:
              return response;
            case 7:
              navigate(data?.data?.target || '/', { replace: true });
              break;
            case 3:
            case 8:
              const newAccessToken = await refreshAccessToken();
              if (newAccessToken) {
                response.config.headers = response.config.headers || {};
                response.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axios(response.config);
              }
              return Promise.reject(response);
            default:
              return response;
          }
        }
        return response;
      },
      (error) => Promise.reject(error)
    );

    // Dỡ bỏ interceptor khi component bị unmount
    return () => {
      if (requestInterceptorId.current !== null) {
        axios.interceptors.request.eject(requestInterceptorId.current);
      }
      if (responseInterceptorId.current !== null) {
        axios.interceptors.response.eject(responseInterceptorId.current);
      }
    };
  }, [navigate]);

  return <Outlet />;
}

export default AxiosProvider;
