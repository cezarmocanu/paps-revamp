import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from "flowbite-react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="/" className="pl-16">
          <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712275200&semt=ais" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Brand</span>
        </NavbarBrand>
        <NavbarCollapse className="pr-16">
          <NavbarLink href="#">
            <div className="hover:text-blue-500 text-slate-400 flex flex-col items-center">
              <svg className="w-5 h-5 mr-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
              </svg>
              <span className="text-xs">Cosul meu</span>
            </div>
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <div className="bg-white justify-end items-center flex px-2 py-2.5 border border-slate-160 cursor-pointer pr-20">
        <Link href="/about">Contact</Link>
      </div>
    </>
  );
}


