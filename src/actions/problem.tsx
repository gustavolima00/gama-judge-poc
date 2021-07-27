import { getAsync } from "./api/gama_judge"
import { Problem } from '../models/Problem'

export const getProblemAsync = async (problemId: string): Promise<Problem> => {
    const response = await getAsync(`problems/${problemId}`);
    return new Problem(response);
}