import axios from "axios";
import { apiErrorHandler } from "../errorHandler";
import { IBaseApiResponse } from "../interface";

interface Request {
  subject_id: number;
  assign_to_id: number;
}

interface Response {
  id: number;
  answer: string;
  score: string;
  subject_id: number;
  assign_to_id: number;
  scored_by_id: number;
  createdAt: Date;
  updatedAt: Date;
}

export const fetchCreatePostTest = async (
  requst: Request
): Promise<IBaseApiResponse<Response | null>> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/post-test`;
  try {
    const { data } = await axios.post(url, requst);
    return data;
  } catch (error) {
    return apiErrorHandler(error);
  }
};
