export const log = (store: any) => (next: any) => (action: any) => {
  console.log(store);
  console.log(next);
  console.log(action);
};
