import { BLOGFAKKER } from "../../faker";
import { IBlogs, FetchBlogParams } from "../../types";

function fetchBlogs(params: FetchBlogParams): Promise<IBlogs> {
    return Promise.resolve(BLOGFAKKER)
}

export { fetchBlogs }