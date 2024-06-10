import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-gray-950/50 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/nextmeetlogo.png"
          width={32}
          height={32}
          alt="nextmeet logo"
          className="max-sm:size-10"
        />
        <p className="text-[20px] font-extrabold text-gray-200 max-sm:hidden ml-1">
          next <span className="text-yellow-400 text-[26px]">MEET</span>
        </p>
      </Link>
      <div className="text-xs md:block lg:text-sm font-semibold text-gray-200 hover:text-yellow-400">
        <ul className="flex gap-2 lg:gap-5">
          <li className="hidden md:block">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="https://saurabhguptaportfolioreact.vercel.app/">
              About Me
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="https://csmock.vercel.app/">CSmock</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/saurabh-gupta-4972362b5/">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://github.com/saurabhguptaiit27">Github</Link>
          </li>
        </ul>
      </div>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
