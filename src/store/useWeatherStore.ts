import axios from "axios";

import IClientResponse from "../interfaces/IclientResponse";
import { create } from "zustand";

const BASE_URL = "http://localhost:3001/weather?";

interface WeatherStore {
  data: IClientResponse | null;
  error: string | null;
  isLoading: boolean;
  fetchData: (city: string) => Promise<void>;
}

const useWeatherStore = create<WeatherStore>((set: any) => ({
  data: null,
  error: null,
  isLoading: false,

  fetchData: async (city: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<{ ok: boolean; data: IClientResponse }>(
        BASE_URL,
        {
          params: { city },
        }
      );
      set({ data: response.data.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message || "An error occurred", isLoading: false });
    }
  },
}));

export default useWeatherStore;
