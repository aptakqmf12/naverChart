import axios from "axios";
import { Request } from "./types/types";

export async function getAPI(request: Request) {
  const res = await axios.post(
    "/v1/datalab/shopping/category/keyword/age",
    {
      startDate: request.startDate,
      endDate: request.endDate,
      timeUnit: request.timeUnit,
      category: request.category,
      keyword: request.keyword,
      device: request.device,
      gender: request.gender,
      ages: ["10", "20"],
    },
    {
      headers: {
        "X-Naver-Client-Id": "mpK4Xes94zbMMu3jJ09b",
        "X-Naver-Client-Secret": "NWFgxlr90B",
      },
    }
  );

  return res;
}
