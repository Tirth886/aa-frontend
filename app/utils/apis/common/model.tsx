import { HEADERFAKKER } from "../../faker";
import { IHeader } from "../../types";

function fetchHeaders(): Promise<IHeader> {
    return Promise.resolve(HEADERFAKKER)
}

export {
    fetchHeaders
}