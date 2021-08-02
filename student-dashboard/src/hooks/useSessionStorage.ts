import { useEffect } from "react";

function useSessionStorage<T>(key: string, state: T): void {
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
}

export default useSessionStorage;
