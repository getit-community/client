import { serverInstance } from 'apis/axios';

interface EmailAuthAPIReq {
  email: string;
}

export interface EmailAuthAPIRes {
  success: boolean;
  message: string;
  data: {
    authNums: string;
  };
}

export const emailAuthAPI = async (
  data: EmailAuthAPIReq,
): Promise<EmailAuthAPIRes | undefined> => {
  try {
    const response = await serverInstance.post('auth/email', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
