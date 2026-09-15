export type Species = "Dog" | "Cat" | "Rabbit";

export type AdoptionStatus = "Available" | "Pending" | "Urgent";

export interface Pet {
  id: number;
  name: string;
  species: Species;
  breed: string;
  age: string;
  gender: "Male" | "Female";
  size: "Small" | "Medium" | "Large";
  image: string;
  description: string;
  personality: string[];
  vaccinated: boolean;
  microchipped: boolean;
  healthChecked: boolean;
  spayedNeutered: boolean;
  goodWith: string[];
  location: string;
  status: AdoptionStatus;
  /** Typical shelter adoption fee in USD — covers vaccination, microchip,
   * and spay/neuter costs already provided before adoption. */
  adoptionFee: number;
}
