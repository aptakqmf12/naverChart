import axios from "axios";
import process from "process";

export async function getAPI(request: any) {
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
      ages: request.ages,
    },
    {
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_NAVER_ID as string,
        "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_SECRET as string,
      },
    }
  );

  return res;
}
