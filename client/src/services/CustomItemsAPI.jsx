const BASE_URL = "/api/custom-items"; // matches server.js route prefix

// Get all cars
export const getAllCars = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch cars");
  return response.json();
};

// Get car by ID
export const getCar = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch car");
  return response.json();
};

// Create a new car
export const createCar = async (carData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(carData),
  });
  if (!response.ok) throw new Error("Failed to create car");
  return response.json();
};

// Update an existing car
export const updateCar = async (id, updatedData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) throw new Error("Failed to update car");
  return response.json();
};

// Delete a car
export const deleteCar = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete car");
  return response.json();
};

export default { getAllCars, getCar, createCar, updateCar, deleteCar };
