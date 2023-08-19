import { BlogDetails } from "./apis/blogs/interface";

interface Params {
    slug?: string
}

interface PageDataArrayObject {
    [index: number]: object | string | number | BlogDetails
}

interface PageDataObject {

}

interface PropsParmas {
    params: Params;
    searchParams: Object;
    data: PageDataArrayObject | BlogDetails
}

export const API = "https://"

export const PROJECTNAME = "Agri Africa"

export const PAGEBLOG = PROJECTNAME + '| Blog'

export const PAGEHOME = PROJECTNAME + '| Home'

export const PAGEABOUTUS = PROJECTNAME + '| About Us'

export type {
    PropsParmas,
    PageDataArrayObject,
    PageDataObject
}