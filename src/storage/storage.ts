export const storage = {
  setItem: (name: string, item: any) => {
    localStorage.setItem(name, JSON.stringify(item));
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
};
