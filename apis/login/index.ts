import { serverInstance } from 'apis/axios';

export interface LoginApiData {
  email: string;
  password: string;
}

export interface loginApiRes {
  success: boolean;
  message: string | null;
}

export const loginApi = async (
  data: LoginApiData,
): Promise<loginApiRes | undefined> => {
  const response = await serverInstance.post('user/login', data);
  return response.data;
};
