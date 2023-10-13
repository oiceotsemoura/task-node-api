export interface IRequestBody<T> extends Express.Request {
  body: T;
}
