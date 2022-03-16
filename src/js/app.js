// TODO: write your code here
export default function showHealth(data) {
  let result = "";
  if (data.health > 50) {
    result = "healthy";
  } else if (data.health <= 50 && data.health >= 15) {
    result = "wounded";
  } else {
    result = "critical";
  }
  return result;
}
