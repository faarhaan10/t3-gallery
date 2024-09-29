'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";  
const menus = [
  {
    route: "/gallery",
    label: "Gallery",
  },
  {
    route: "/blog",
    label: "Blogs",
  },
  {
    route: "/about",
    label: "About Me",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
 

  return (
    <header className="bg-transparent">
      <nav className="mx-auto 2xl:container">
        <div className="container mx-auto flex justify-between items-center p-5">
          <Link href={"/"}>
            <h1 className="text-2xl">T3 GALLERY</h1>
          </Link>
          <div className="flex gap-x-6">
            {
              menus.map(menu => <Link
                key={menu.label}
                href={menu.route}
              >{menu.label}</Link>)
            }
          </div>
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
