import { VisibilityFilter } from  "./VisibilityFilter"

export class UiState
{
    constructor(visibilityFilter: VisibilityFilter) { this.visibilityFilter = visibilityFilter }

    readonly visibilityFilter: VisibilityFilter;
};