import { get, ssePost } from "./base";
import type { IOnData, IOnCompleted, IOnError } from "./base";

export function getTest(params?: Record<string, any>) {
  // return get("http://127.0.0.1:3000/stream/", { params }) as Promise<any>;
  return get("/api/stream?hello=hello", { params }) as Promise<any>;
}

export function getTestNotProxy(params?: Record<string, any>) {
  return get("http://127.0.0.1:3000/stream", { params }) as Promise<any>;
}

export const sendChatMessage = async (
  body: Record<string, any>,
  {
    onData,
    onCompleted,
    onError,
    getAbortController,
  }: {
    onData: IOnData;
    onCompleted: IOnCompleted;
    onError: IOnError;
    getAbortController?: (abortController: AbortController) => void;
  }
) => {
  return ssePost(
    "http://127.0.0.1:3000/home/test",
    // "/api/home/test",
    {
      body: {
        ...body,
        response_mode: "streaming",
      },
    },
    { onData, onCompleted, onError, getAbortController }
  );
};
