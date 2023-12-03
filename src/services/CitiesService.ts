import axios, { AxiosResponse } from 'axios';

export interface City {
  name: string;
  address: { cityName: string };
  geoCode: {
    latitude: number;
    longitude: number;
  };
}

interface ReferenceDataResponse {
  data: City[];
  meta: {
    count: number;
    links: {
      self: string;
    };
  };
}

interface AccessTokenResponse {
  access_token: string;
}

export const apiFetchCities = async (inputValue?: string): Promise<City[]> => {
  // <--- fetching access token
  const url = 'https://test.api.amadeus.com/v1/security/oauth2/token';
  let accessToken: string | undefined;
  try {
    const response = await axios.post<AccessTokenResponse>(
      url,
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_CITIES_API_KEY ?? '',
        client_secret: process.env.REACT_APP_CITIES_API_SECRET ?? '',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    accessToken = response.data.access_token;
  } catch (error) {
    console.log(error);
  }
  // </--- fetching access token

  // <--- fetching cities
  try {
    const response: AxiosResponse<ReferenceDataResponse> = await axios.get(
      `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY${
        inputValue ? `&keyword=${inputValue}` : ''
      }`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const cities = response.data.data;
    return cities;
  } catch (error) {
    console.error('Error fetching cities from Amadeus API:', error);
    throw error;
  }
  // </--- fetching cities
};
