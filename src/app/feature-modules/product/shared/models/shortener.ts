export interface Shortener {
  id?: number;
  tinyUrl: string;
  actualUrl: string;
  expireAt: string;
}