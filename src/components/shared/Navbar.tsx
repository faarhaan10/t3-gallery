import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {

  return (
    <header className="bg-transparent">
      <nav className="mx-auto 2xl:container">
        <div className="flex justify-between container mx-auto p-5 "> 
          <Link href={"/"}>
            <h1 className="text-2xl">T3 GALLERY</h1>
          </Link>
          <div className="">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div> 
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
