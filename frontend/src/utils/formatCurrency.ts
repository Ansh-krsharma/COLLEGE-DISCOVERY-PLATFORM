export function formatCurrency(value = 0) {
  if (value >= 10000000) {
    return `INR ${(value / 10000000).toFixed(1)} Cr`;
  }

  if (value >= 100000) {
    return `INR ${(value / 100000).toFixed(1)} L`;
  }

  return `INR ${value.toLocaleString("en-IN")}`;
}
