import { axiosClient, getToken } from '@/config/axios';

export const AddResponseRequest = async (
  body: Record<string, string | number>
): Promise<Response> => {
  getToken();
  const { data } = await axiosClient.post('/responses', body);
  return data;
};
