interface BlogDetailMeta {
    title?: string,
    description?: string,
    image?: string
}

interface BlogDetails {
    id: number | string,
    title: string,
    image: string,
    meta?: BlogDetailMeta,
    content?: string,
    description?: string,

}

interface FetchBlogParams {
    slug?: string | undefined | null
}

interface IBlogs {
    map(arg0: (post: BlogDetails, index: number) => import("react").JSX.Element): import("react").ReactNode
    [index: number]: BlogDetails
}

export type {
    BlogDetails,
    FetchBlogParams,
    IBlogs,
    BlogDetailMeta
}