import { Metadata } from "next"
import { PAGEVISITORS } from "../utils/constant"

export const generateMetadata = (): Metadata => {
    return {
        title: PAGEVISITORS
    }
}

export default function Visitors() {
    return <></>
}