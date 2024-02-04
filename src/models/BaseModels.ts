import { v4 } from 'uuid';

import { ValidationError } from '../errors';

export default class BaseModel {
    id: string;

    constructor() {
        this.id = v4();
    }
}

export class BaseTaskModel extends BaseModel {
    title: string;

    constructor(title: string) {
        super();
        this.title = this.#validateAndGetTitle(title);
    }

    /**
     * Apply the trim() method to the passed string and return it if the length !== 0,
     * otherwise a new ValidationError will be thrown.
     * @param title The string that needs to be validated.
     */
    #validateAndGetTitle(title: string): string {
        title = title.trim();
        if (title.length === 0) {
            throw new ValidationError('The title of the task must contain at least one non-whitespace character.') // prettier-ignore
        }
        return title;
    }
}
