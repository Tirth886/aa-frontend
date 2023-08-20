import { IHeader } from "../../types";
import { fetchHeaders } from "./model";

function getHeaders(): Promise<IHeader> {
    return fetchHeaders();
}

export {
    getHeaders
}