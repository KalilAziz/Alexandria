import Image from 'next/image'
import Link from 'next/link'

export const Test = () => {
  return (
    <Link href="">
      <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
    </Link>
  )
}
