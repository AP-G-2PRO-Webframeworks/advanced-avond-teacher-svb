import { useRouter } from 'next/router'

function ShopItem() { 
    const router = useRouter();
    return (
        <>
            this is a shopItem!
            <div>{ router.query.itemid }</div>
        </>
    );
}

export default ShopItem;