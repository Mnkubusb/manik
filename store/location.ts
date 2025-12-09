import { locations } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

type Location = typeof DEFAULT_LOCATION;

interface LocationState {
    activeLocation: Location;
}

interface LocationActions {
    setActiveLocation: (location: Location) => void;
    resetActiveLocation: () => void;
}

type LocationStore = LocationState & LocationActions;

const useLocationStore = create<LocationStore>()(immer((set) => ({
    activeLocation : DEFAULT_LOCATION,
    setActiveLocation : (location: Location) => set((state) => {
        state.activeLocation = location;
    }),
    resetActiveLocation : () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION;    
    })
})));

export default useLocationStore;