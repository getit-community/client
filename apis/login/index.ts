import { serverInstance } from 'apis/axios';

export interface LoginAPIReq {
  email: string;
  password: string;
}

export interface loginAPIRes {
  success: boolean;
  message: string | null;
}

export const loginAPI = async (
  data: LoginAPIReq,
): Promise<loginAPIRes | undefined> => {
  const response = await serverInstance.post('user/login', data);
  return response.data;
};
