import { axiosClient, getToken } from '@/config/axios';
import { Response } from '@/utils/types/responseTypes';

export const AddResponseRequest = async (
  body: Record<string, string | number>
): Promise<Response> => {
  getToken();
  const { data } = await axiosClient.post('/responses', body);
  return data;
};

export const checkSolutionRequest = async (id: number): Promise<Response> => {
  getToken();
  const { data } = await axiosClient.put(`/responses/${id}`);
  return data;
};
