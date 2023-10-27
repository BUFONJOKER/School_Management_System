import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Link from "next/link";

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className="bg-black text-white"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Dropdown >
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="text-white"              >
                Teachers
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem textValue="links" key="new"><Link href={`/addteacher`}>Add   </Link></DropdownItem>
              <DropdownItem textValue="links" key="copy"><Link href={`/viewteacher`}>View   </Link></DropdownItem>
              <DropdownItem textValue="links" key="edit"><Link href={`/updateteacher`}>Update   </Link></DropdownItem>
              <DropdownItem textValue="links" key="delete" className="text-danger" color="danger">
                <Link href={`/deleteteacher`}>Delete   </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered" className="text-white"              >
                Students
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem textValue="links" key="new"><Link href={`/addstudent`}>Add   </Link></DropdownItem>
              <DropdownItem textValue="links" key="copy"><Link href={`/viewstudent`}>View   </Link></DropdownItem>
              <DropdownItem textValue="links" key="edit"><Link href={`/updatestudent`}>Update   </Link></DropdownItem>
              <DropdownItem textValue="links" key="delete" className="text-danger" color="danger">
                <Link href={`/deletestudent`}>Delete   </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered" className="text-white"             >
                Supporting Staff
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem textValue="links" key="new"><Link href={`/addstaff`}>Add   </Link></DropdownItem>
              <DropdownItem textValue="links" key="copy"><Link href={`/viewstaff`}>View   </Link></DropdownItem>
              <DropdownItem textValue="links" key="edit"><Link href={`/updatestaff`}>Update   </Link></DropdownItem>
              <DropdownItem textValue="links" key="delete" className="text-danger" color="danger">
                <Link href={`/deletestaff`}>Delete   </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black">
        <NavbarMenuItem className="mt-2">
          <Button><Link href={`/`} onClick={() => setIsMenuOpen(false)}>Home</Link></Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-2">
          <Button><Link href={`/`} onClick={() => setIsMenuOpen(false)}>Features</Link></Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-2">
          <Button><Link href={`/`} onClick={() => setIsMenuOpen(false)}>Services</Link></Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-2">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered" className="bg-gray-300"              >
                Teachers
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem textValue="links" key="new"><Link onClick={() => setIsMenuOpen(false)} href={`/addteacher`}>Add   </Link></DropdownItem>
              <DropdownItem textValue="links" key="copy"><Link onClick={() => setIsMenuOpen(false)} href={`/viewteacher`}>View   </Link></DropdownItem>
              <DropdownItem textValue="links" key="edit"><Link onClick={() => setIsMenuOpen(false)} href={`/updateteacher`}>Update   </Link></DropdownItem>
              <DropdownItem textValue="links" key="delete" className="text-danger" color="danger">
                <Link onClick={() => setIsMenuOpen(false)} href={`/deleteteacher`}>Delete   </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered" className="bg-gray-300"              >
                Students
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem textValue="links" key="new"><Link onClick={() => setIsMenuOpen(false)} href={`/addstudent`}>Add   </Link></DropdownItem>
              <DropdownItem textValue="links" key="copy"><Link onClick={() => setIsMenuOpen(false)} href={`/viewstudent`}>View   </Link></DropdownItem>
              <DropdownItem textValue="links" key="edit"><Link onClick={() => setIsMenuOpen(false)} href={`/updatestudent`}>Update   </Link></DropdownItem>
              <DropdownItem textValue="links" key="delete" className="text-danger" color="danger">
                <Link onClick={() => setIsMenuOpen(false)} href={`/deletestudent`}>Delete   </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered" className="bg-gray-300">
                Supporting Staff
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem textValue="links" key="new"><Link onClick={() => setIsMenuOpen(false)} href={`/addstaff`}>Add   </Link></DropdownItem>
              <DropdownItem textValue="links" key="copy"><Link onClick={() => setIsMenuOpen(false)} href={`/viewstaff`}>View   </Link></DropdownItem>
              <DropdownItem textValue="links" key="edit"><Link onClick={() => setIsMenuOpen(false)} href={`/updatestaff`}>Update   </Link></DropdownItem>
              <DropdownItem textValue="links" key="delete" className="text-danger" color="danger">
                <Link onClick={() => setIsMenuOpen(false)} href={`/deletestaff`}>Delete   </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button><Link href="#" onClick={() => setIsMenuOpen(false)}>Login</Link></Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
