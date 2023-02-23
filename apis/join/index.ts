import { serverInstance } from 'apis/axios';

interface Data {
  email: string;
}

export interface EmailAuthApiRes {
  success: boolean;
  message: string;
  authNums: string;
}

export const emailAuthApi = async (
  data: Data,
): Promise<EmailAuthApiRes | undefined> => {
  try {
    const response = await serverInstance.post('auth/email', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
