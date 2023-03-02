import { serverInstance } from 'apis/axios';

export interface SocialLoginApiData {
  loginType: 'google' | 'github';
}

export interface SocialloginApiRes {
  success: boolean;
  message: string | null;
}

export const socialLoginApi = async (
  data: SocialLoginApiData,
): Promise<SocialloginApiRes | undefined> => {
  const response = await serverInstance.get(`user/login/${data.loginType}`);
  return response.data;
};
