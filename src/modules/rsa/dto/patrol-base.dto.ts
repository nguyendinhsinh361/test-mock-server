export class PatrolDto {
  id: string;
  vin: string;
  vehicleInformation: VehicalInfoDto;
  status: string;
  stNumber: number;
  stName: string;
  city: string;
  state: string;
  zip: number;
  directionsNotes: string;
  firstNameCustomer: string;
  lastNameCustomer: string;
  phoneContact: string;
  starsVote: number;
  descriptionVote: string;
  serviceId: string;
  createdAt: Date;
  updatedAt: Date;
}
export class VehicalInfoDto {
  id: string;
  vin: string;
  make: string;
  model: string;
  series: string;
  body: string;
  colour: string;
  fuelType: string;
  transmissionType: string;
  buildYear: number;
  registrationDate: Date;
  registration: string;
  registrationState: string;
  odometer: string;
  batteryVoltage: string;
  clubAssistBatteryPart: string;
  location: LocationVehicalDto;
}
export class LocationVehicalDto {
  id: number;
  latitude: number;
  longitude: number;
  hdop: number;
  heading: number;
  velocity: number;
  locationTimestamp: Date;
  comment: string;
}
