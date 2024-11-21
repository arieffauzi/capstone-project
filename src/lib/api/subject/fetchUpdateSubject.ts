import axios from "axios";
import { capstoneAxios } from "../axiosInterceptor";
import { apiErrorHandler } from "../errorHandler";
import { IBaseApiResponse } from "../interface";

interface Request {
  name: string;
  lesson: string;
  question: string;
}

interface Response {
  id: number;
  name: string;
  lesson: string;
  question: string;
  createdAt: Date;
  updatedAt: Date;
}

export const fetchUpdateSubject = async (
  id: number,
  requst: Request
): Promise<IBaseApiResponse<Response | null>> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/subject/${id}`;
  try {
    const { data } = await axios.patch(url, requst);
    return data;
  } catch (error) {
    return apiErrorHandler(error);
  }
};
