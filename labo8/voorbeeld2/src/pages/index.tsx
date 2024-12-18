import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
export default function Home() {
  let items = [17, 23, 29, 31];

  let router = useRouter();

  return (
    <>
      hallo
      <div>
        <Image
          alt="bert en ernie"
          src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Epi_y_Blas.jpg"
          fill={true}
        />
      </div>

      <menu>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        {items.map(it => {
          return (
            <li>
              <Link href={
                {
                  pathname: "/shop/[itemid]",
                  query: { itemid: it }
                }
              }>
                shop item {it}
              </Link>
            </li>
          )
        })}
      </menu>

      <button onClick={() => router.push('/shop')}>shop</button>

    </>
  );
}
