export const selectDataCreature = state => state.creaturesState.dataCreature;
export const selectCreatures = state => state.creaturesState.creatures;
export const selectCreatureNextLink = state => state.creaturesState.next;
export const selectCreaturePreviousLink = state => state.creaturesState.previous;

export const selectPlanets = state => state.planetsState.planets;
export const selectDataPlanet = state => state.planetsState.dataPlanet;
export const selectPlanetNextLink = state => state.planetsState.next;
export const selectPlanetPreviousLink = state => state.planetsState.previous;

export const selectIsInitializedApp = state => state.appState.isInitializedApp;
export const selectIsLoading = state => state.appState.isLoading;
export const selectError = state => state.appState.error;
