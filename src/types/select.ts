export interface IOption {
  readonly label: string;
  readonly value: string;
}
export interface ICityOption {
  value: string;
  label: string;
  geoCode: {
    latitude: number;
    longitude: number;
  };
}
