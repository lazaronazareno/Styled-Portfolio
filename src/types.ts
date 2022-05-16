export interface Panel extends Record<string, any> {
  id: number,
  text: string,
  img: string,
  use: string,
  stack: string,
  description: string,
  link1: string,
  link2?: string
}