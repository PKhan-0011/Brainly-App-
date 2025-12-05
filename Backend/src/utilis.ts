export function RandomValue(len: number) {
  let data = "qweertyuioplkjhgfdsazxcvnm123457";
  let ans = "";
  let length = data.length;

  for (let i = 0; i <= length; i++) {
    ans += data[Math.floor(Math.random() * length)];
  }
  return ans;
}
