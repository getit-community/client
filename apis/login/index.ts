import { serverInstance } from 'apis/axios';

export interface LoginAPIReq {
  email: string;
  password: string;
}

export interface LoginAPIRes {
  success: boolean;
  message: string | null;
}

export const loginAPI = async (
  data: LoginAPIReq,
): Promise<LoginAPIRes | undefined> => {
  const response = await serverInstance.post('user/login', data);
  return response.data;
};
