import { PropsParmas as BlogProps, PAGEBLOG } from "@/app/utils/constant"
import { Metadata } from "next"

export const generateMetadata = ({ params }: BlogProps): Metadata => {
    return {
        title: params.slug
    }
}

export default function IndividualBlogs(props: BlogProps) {
    return (
        <></>
    )
}