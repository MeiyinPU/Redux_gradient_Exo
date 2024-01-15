export function randomHexColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}
export function generateSpanColor(color:string) {
  return `
    <span style="color:${color}">${color}</span>
  `;
}
