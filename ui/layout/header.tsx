import Link from "next/link";
import HeaderSearch from "./headerSearch";
import {
  GitHubLogoIcon
} from "@radix-ui/react-icons";
export default function Header() {
  const navList = [
    {
      name: "Docs",
      href: "/",
    },
    {
      name: "Component",
      href: "/component",
    },
    {
      name: "Blocks",
      href: "/contact",
    },
    {
      name: "Charts",
      href: "/contact",
    },
    {
      name: "Themes",
      href: "/contact",
    },
    {
      name: "Examples",
      href: "/contact",
    },
    {
      name: "Colors",
      href: "/contact",
    },
    {
      name: "Mail",
      href: "/mail",
    },
    {
      name: "Cards",
      href: "/cards",
    },
  ];
  return (
    <div className='sticky top-0 z-50 w-full backdrop-blur'>
      <div className='container px-8 flex h-14 max-w-screen-2xl items-center'>
        <div className="md:flex">
          <Link href='/' className='flex items-center mr-6'>
            <span className="font-bold">shadcn/ui</span>
          </Link>
          <nav className='flex gap-6 items-center text-sm'>
            {navList.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.href}

                >
                  <span className='transition-colors hover:text-foreground/80 text-foreground/60'>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className='flex flex-1 items-center justify-end space-x-2'>
          <HeaderSearch></HeaderSearch>
          <nav className='flex items-center'>
            <Link
              href={"/"}
              className='inline-flex justify-center items-center w-8 h-8 py-2 px-0 rounded-md hover:bg-accent'
            >
              <GitHubLogoIcon></GitHubLogoIcon>
            </Link>
            <Link
              href={"/"}
              className='inline-flex justify-center items-center w-8 h-8 py-2 px-0 rounded-md hover:bg-accent'
            >
              <GitHubLogoIcon></GitHubLogoIcon>
            </Link>
            <Link
              href={"/"}
              className='inline-flex justify-center items-center w-8 h-8 py-2 px-0 rounded-md hover:bg-accent'
            >
              <GitHubLogoIcon></GitHubLogoIcon>
            </Link>
          </nav>
          <Link href='/' className="border-l pl-4">Sing in</Link>
        </div>
      </div>
    </div>
  );
}
