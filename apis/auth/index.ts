import { serverInstance } from 'apis/axios';

export interface AuthAPIReq {}

export interface AuthAPIRes {
  success: boolean;
  message: null | string;
}

export const authAPI = async (): Promise<AuthAPIRes | undefined> => {
  const response = await serverInstance.get('auth/user');
  return response.data;
};
