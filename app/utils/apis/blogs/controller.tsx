import { IBlogs, FetchBlogParams } from "../../types";
import { fetchBlogs } from "./model";

async function getBlogs(params: FetchBlogParams): Promise<IBlogs> {
    const response = fetchBlogs(params);
    return response;
}

export {
    getBlogs
}