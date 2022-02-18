//요청타입
interface Request extends RequestOptions {
  startDate: string;
  endDate: string;
  category: string;
  keyword: string;
}

type Age = "10" | "20" | "30" | "40" | "50" | "60" | null | undefined;

interface RequestOptions {
  timeUnit?: "date" | "week" | "month";
  device?: "pc" | "mo" | "";
  gender?: "m" | "f" | "";
  ages?: Age[];
}
interface Checkboxs {
  age: Age;
  checked: boolean;
}

//반환타입
interface Response {
  period: string;
  ratio: number;
  group: Age | undefined;
}

export type { Request, Response, RequestOptions, Checkboxs, Age };
