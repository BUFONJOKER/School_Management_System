import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Link from "next/link.js";
import Image from "next/image";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

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

          <Image className="bg-white" src="/logo.svg" alt='logo image'
            width={50} height={50} style={{ width: 50, height: 50 }} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarBrand>

          <Link className="text-white" href={`/`}>
            <Image className="bg-white" src="/logo.svg" alt='logo image'
              width={50} height={50} style={{ width: 50, height: 50 }} /></Link>
        </NavbarBrand>
        <NavbarItem>
          <Button>
            Features
          </Button>
        </NavbarItem>
        <NavbarItem >
          <Button>
            Services
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button>
                Supporting Staff
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">View Supporting Staff</DropdownItem>
              <DropdownItem key="copy">Add Supporting Staff</DropdownItem>
              <DropdownItem key="edit">Update Supporting Staff</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete Supporting Staff
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button>
                Teachers
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">View Teachers</DropdownItem>
              <DropdownItem key="copy">Add Teachers</DropdownItem>
              <DropdownItem key="edit">Update Teachers</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete Teachers
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>


        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button>
                Students
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">View Students</DropdownItem>
              <DropdownItem key="copy">Add Students</DropdownItem>
              <DropdownItem key="edit">Update Students</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete Students
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Button>
            Expenses
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button>
            About
          </Button>
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

        <NavbarMenuItem>

          <Button>
            Features
          </Button>

        </NavbarMenuItem>


        <NavbarMenuItem >
          <Button>
            Services
          </Button>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Button>
                Supporting Staff
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">View Supporting Staff</DropdownItem>
              <DropdownItem key="copy">Add Supporting Staff</DropdownItem>
              <DropdownItem key="edit">Update Supporting Staff</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete Supporting Staff
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Button>ive
                Teachers
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">View Teachers</DropdownItem>
              <DropdownItem key="copy">Add Teachers</DropdownItem>
              <DropdownItem key="edit">Update Teachers</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete Teachers
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>


        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Button>
                Students
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">View Students</DropdownItem>
              <DropdownItem key="copy">Add Students</DropdownItem>
              <DropdownItem key="edit">Update Students</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete Students
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Button>
            Expenses
          </Button>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Button>
            About
          </Button>
        </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
