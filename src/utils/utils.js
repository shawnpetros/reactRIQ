export const formatUSD = input => {
  let parts;

  input = input.toString();

  input = input.replace(/[,\s]/g, '');

  parts = input.toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}
