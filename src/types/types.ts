//요청타입
interface Request extends RequestOptions {
  startDate: string;
  endDate: string;
  category: string;
  keyword: string;
}
interface RequestOptions {
  timeUnit?: "date" | "week" | "month";
  ages?: Array<`${1 | 2 | 3 | 4 | 5 | 6}0`>;
  device?: "pc" | "mo" | "";
  gender?: "m" | "f" | "";
}
//반환타입
interface Response {
  period: string;
  ratio: number;
  group: Array<`${1 | 2 | 3 | 4 | 5 | 6}0`> | null;
}

export type { Request, Response, RequestOptions };
