export function capitaliseRoute(str: string) {
  let arr = str.split("");
  if (arr.length < 1) return "Home";
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}
