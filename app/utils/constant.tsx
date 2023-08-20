import { BlogDetails } from "./types/blogInterface";

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

export const PAGEBLOG = PROJECTNAME + ' | Blog'

export const PAGEHOME = PROJECTNAME + ' | Home'

export const PAGEABOUTUS = PROJECTNAME + ' | About Us'

export const PAGEAEXHIBITORS = PROJECTNAME + ' | Exhibitors'

export const PAGEVISITORS = PROJECTNAME + ' | Visitors'

export const PAGEMEDIA = PROJECTNAME + ' | Media'

export type {
    PropsParmas,
    PageDataArrayObject,
    PageDataObject
}