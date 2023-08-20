import type { Metadata } from 'next'
import { PropsParmas as BlogProps, PAGEBLOG } from '../utils/constant';
import { BlogDetails, IBlogs } from '../utils/types/blogInterface';
import { getBlogs } from '../utils/apis';

export const generateMetadata = (): Metadata => {
    return {
        title: PAGEBLOG
    }
}

export default async function Blogs(props: BlogProps) {
    const blogPosts = await getBlogs({
        slug: null
    })
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {blogPosts.map((post: BlogDetails, index: number) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                        <img src={post.image} alt={post.title} className="w-full h-auto mb-4 max-h-40 object-cover rounded-lg" />
                        <a href={'/blogs/' + post.title.replaceAll(" ", "-")} className="text-lg font-semibold mb-2">{post.title}</a>
                        <p className="text-gray-600">{post.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
