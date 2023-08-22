export const toBrazilianDate = (date: string) => {
  return date.split("-").reverse().join("/");
};
