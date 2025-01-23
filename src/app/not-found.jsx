import Link from 'next/link';

export default function NotFound() {
 return (
  <div>
   <h1>Not Found</h1>
   <p>Sorry your page is not found</p>

   <Link href="/">Return to Home</Link>
  </div>
 );
}