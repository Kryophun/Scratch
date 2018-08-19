import { DurableData } from "./DurableData"
import { UiState } from "./UiState"
import { VisibilityFilter } from "./VisibilityFilter";

export class ApplicationState {

    constructor(uiState: UiState, durableData: DurableData) { this.uiState = uiState; this.durableData = durableData; }

    uiState: UiState;
    durableData: DurableData;
}