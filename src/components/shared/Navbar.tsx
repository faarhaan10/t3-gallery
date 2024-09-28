import Link from "next/link";

const Navbar = () => {

  return (
    <header className="bg-transparent">
      <nav className="mx-auto 2xl:container">
        <div className="flex justify-between container mx-auto p-5 "> 
          <Link href={"/"}>
            <h1 className="text-2xl">T3 GALLERY</h1>
          </Link>
          <Link href={"/sign-in"}>
            <h1 className="text-2xl">Sign in</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
