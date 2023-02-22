import { serverInstance } from 'apis/axios';

interface Data {
  email: string;
  password: string;
}

export interface loginApiRes {
  success: boolean;
  message: string | null;
}

export const loginApi = async (
  data: Data,
): Promise<loginApiRes | undefined> => {
  try {
    const response = await serverInstance.post('user/login', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
