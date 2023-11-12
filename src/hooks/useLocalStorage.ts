export const useLocalStorage = {
  getItem,
  setItem,
};

function getItem(key: string) {
  if(typeof window !== 'undefined'){
    const item = window.localStorage.getItem(key);
    return item !== "undefined" && item ? JSON.parse(item) : undefined;
  }
}

function setItem(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
