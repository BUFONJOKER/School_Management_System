import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import Link from "next/link.js";
import  Image  from "next/image";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Features",
    "Services",
    "Admin",
    "Teachers",
    "Students",
    "Expenses",
    "About"
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black "
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
    
        <Image className="bg-white" src="/logo.svg" alt = 'logo image'
             width={50} height={50} style={{width:50,height:50}}/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarBrand>
    
          <Link className="text-white" href={`/`}>
            <Image className="bg-white" src="/logo.svg" alt = 'logo image'
             width={50} height={50} style={{width:50,height:50}}/></Link>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-white mx-3" href="/about">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-white" href="/" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  className="text-white mx-3" href="/about">
           Admin
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link  className="text-white mx-3" href="/about">
           Teachers
          </Link>
        </NavbarItem>


        <NavbarItem>
          <Link  className="text-white mx-3" href="/about">
           Students
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link  className="text-white mx-3" href="/about">
           Expenses
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link  className="text-white mx-3" href="/about">
           About
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-white" href="/">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
