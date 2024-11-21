import axios from "axios";
import { apiErrorHandler } from "../errorHandler";
import { IBaseApiResponse } from "../interface";
import { Subject } from "../subject/fetchSubjectList";

interface Request {
  name?: string;
  page?: number;
  assign_to_name?: string;
  scored_by_name?: string;
}

export interface PostTest {
  id: number;
  answer: string;
  score: number;
  subject: Subject;
  assign_to: any;
  scored_by: any;
  createdAt: Date;
  updatedAt: Date;
}

export const fetchPostTestList = async (
  requst: Request
): Promise<IBaseApiResponse<PostTest[] | null>> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/post-test/find`;
  try {
    const { data } = await axios.post(url, requst);
    return data;
  } catch (error) {
    return apiErrorHandler(error);
  }
};
