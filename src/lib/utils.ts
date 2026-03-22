export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);

export const slugIncludes = (source: string, query: string) =>
  source.toLowerCase().includes(query.trim().toLowerCase());
