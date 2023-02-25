import { serverInstance } from 'apis/axios';

export interface SignupApiData {
  email: string;
  password: string;
  signupType: 'google' | 'github' | 'email';
}

export interface SignupApiRes {
  success: boolean;
  message: string;
}

export const signupApi = async (
  data: SignupApiData,
): Promise<SignupApiRes | undefined> => {
  const response = await serverInstance.post('user/signup', data);
  return response.data;
};
