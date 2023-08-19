interface BlogDetailMeta {
    title?: string,
    description?: string,
    image?: string
}

interface BlogDetails {
    id: number | string,
    title: string,
    meta: BlogDetailMeta,
    content: string,

}

export type {
    BlogDetails,
    BlogDetailMeta
}