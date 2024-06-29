export const getServices = async () => {
  const res = await fetch("http://localhost:3000/services/api/get-all");
  const services = await res.json();
  return services;
};

export const getServicesDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/services/api/${id}`);
  const service = res.json();
  return service;
};
// export const getServicesDetails = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/services/api/${id}`);
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     const service = await res.json();
//     return service;
//   } catch (error) {
//     console.error("Error fetching service details:", error);
//     return null;
//   }
// };
