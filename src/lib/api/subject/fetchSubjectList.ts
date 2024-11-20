import axios from "axios";
import { apiErrorHandler } from "../errorHandler";
import { IBaseApiResponse } from "../interface";

interface Request {
  name?: string;
  page?: number;
  size?: number;
}

export interface Subject {
  id: number;
  name: string;
  lesson: string;
  post_test: string;
}

interface UsersResponse {
  data: Subject[];
  total: number;
}

export const fetchSubjectList = async (
  requst: Request
): Promise<IBaseApiResponse<UsersResponse | null>> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/subject/find`;
  try {
    const { data } = await axios.post(url, requst);
    return data;
  } catch (error) {
    return apiErrorHandler(error);
  }
};
