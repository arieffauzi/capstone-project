import axios from "axios";
import { capstoneAxios } from "../axiosInterceptor";
import { apiErrorHandler } from "../errorHandler";
import { IBaseApiResponse } from "../interface";

interface Request {
  name: string;
  lesson: string;
  post_test: string;
}

interface Response {
  id: number;
  name: string;
  lesson: string;
  post_test: string;
  createdAt: Date;
  updatedAt: Date;
}

export const fetchCreateSubject = async (
  requst: Request
): Promise<IBaseApiResponse<Response | null>> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/subject`;
  try {
    const { data } = await axios.post(url, requst);
    return data;
  } catch (error) {
    return apiErrorHandler(error);
  }
};
