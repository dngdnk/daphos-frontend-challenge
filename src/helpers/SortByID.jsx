// Helper to sort employee data by ID in ascending order
export function sortById(data) {
  return [...data].sort((a, b) => a.id.localeCompare(b.id));
}
