import { useRouter } from "next/router";

function Shop() {
    let router = useRouter();
    return (
        <>
            shop home page!
            <button onClick={() => router.push('/about')}>about</button>
        </>
    );
}

export default Shop;