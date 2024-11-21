import axios from "axios";
import { capstoneAxios } from "../axiosInterceptor";
import { apiErrorHandler } from "../errorHandler";
import { IBaseApiResponse } from "../interface";

interface Response {
  id: number;
  name: string;
  lesson: string;
  question: string;
  createdAt: Date;
  updatedAt: Date;
}

export const fetchDeleteSubject = async (
  id: number
): Promise<IBaseApiResponse<Response | null>> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/subject/${id}`;
  try {
    const { data } = await axios.delete(url);
    return data;
  } catch (error) {
    return apiErrorHandler(error);
  }
};
