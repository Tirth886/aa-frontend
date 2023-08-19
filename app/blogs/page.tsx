import type { Metadata } from 'next'
import { PropsParmas as BlogProps, PAGEBLOG } from '../utils/constant';
const blogPosts = [
    {
        title: 'Post Title 1',
        image: 'https://picsum.photos/seed/picsum/200/300',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        title: 'Post Title 2',
        image: 'https://picsum.photos/seed/picsum/200/300',
        excerpt: 'Nullam ut scelerisque elit, non tincidunt lectus.',
    },
    {
        title: 'Post Title 3',
        image: 'https://picsum.photos/seed/picsum/200/300',
        excerpt: 'Vivamus vel ultrices lorem. Sed nec fringilla velit.',
    },
];

export const generateMetadata = ({ params }: BlogProps): Metadata => {
    console.log(params)
    return {
        title: PAGEBLOG
    }
}

export default function Blogs(props: BlogProps) {

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                        <img src={post.image} alt={post.title} className="w-full h-auto mb-4 max-h-40 object-cover rounded-lg" />
                        <a href={'/blogs/' + post.title.replaceAll(" ", "-")} className="text-lg font-semibold mb-2">{post.title}</a>
                        <p className="text-gray-600">{post.excerpt}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}