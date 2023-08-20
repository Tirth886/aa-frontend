interface IHeader {
    map(arg0: (header: HeaderDetails, index: number) => import("react").JSX.Element): import("react").ReactNode
    [index: number]: HeaderDetails
}

interface HeaderDetails {
    id: number,
    menu: string,
    redirection: string,
    isSubMenu: boolean,
    subMenu?: IHeader
}

export type {
    IHeader, HeaderDetails
}