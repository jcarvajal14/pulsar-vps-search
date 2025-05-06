import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { DatePeriod } from '../types/datePeriod.module';
// import router from 'next/router';
// import dotenv from 'dotenv'

let baseURL;

if (typeof window !== "undefined") {
  baseURL = (process.env.NODE_ENV === 'production') ? `${window.location.origin}/api` : process.env.NEXT_PUBLIC_API_BASE_URL;
} else baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const instance = axios.create({ baseURL });

// instance.interceptors.request.use(
//   async (config: AxiosRequestConfig) => {
//     const isClient = typeof window !== 'undefined';
//     if (config.headers && isClient) {
//     }
//     return config as InternalAxiosRequestConfig;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response) => response.data,
//   async (error: {
//     response: AxiosResponse;
//     config: AxiosRequestConfig & { retry: boolean };
//   }) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest.retry) {
//       originalRequest.retry = true;
//       if (error.response.config.url !== '/users/me') {
//         await router.push('/api/auth/logout');
//       }
//       return instance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export const getConfig = (accessToken?: string) => ({
  withCredetials: false,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const getHello = async (): Promise<any> => instance.get(`/hello`);
const getUser = async (accessToken?: string): Promise<string> =>
  instance.get('/auth/user', getConfig(accessToken));
const getTrafficData = async (period: DatePeriod, accessToken?: string): Promise<any> => 
  instance.get('/dashboard/traffic/data', {
    ...getConfig(accessToken),
    params: {
      period
    },
  });

const getServerList = async (accessToken?: string): Promise<any> => 
  instance.get('/server/all', { ...getConfig(accessToken) })
const getServerDetails = async (id: Number, accessToken?: string): Promise<any> => 
  instance.get('/server/details', {
    ...getConfig(accessToken), params: {
    id
  }})

  
const apiService = {
  api: {
    getHello,
  },
  secureApi: (accessToken?: string) => ({
    getUser: () => getUser(accessToken),
    getTrafficData: (period: DatePeriod) => getTrafficData(period, accessToken),
    getServerList: () => getServerList(accessToken),
    getServerDetails: (id:Number) => getServerDetails(id, accessToken),
  }),
};
export default apiService;
