
export const getServerSideProps = async () => {
    console.log("Abc")

    return {
        props: { data: "name" }
    }
}

export default function AboutUs() {
    return (
        <></>
    )
}
