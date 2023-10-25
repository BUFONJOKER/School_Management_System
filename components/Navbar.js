import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link.js";
import Image from "next/image";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isBordered
      
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black "
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
        className="text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            className="bg-white"
            src="/logo.svg"
            alt="logo image"
            width={50}
            height={50}
            style={{ width: 50, height: 50 }}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 overflow-hidden" justify="center">
        <NavbarBrand>
          <Link href={`/`}>
            <Image
              className="bg-white"
              src="/logo.svg"
              alt="logo image"
              width={50}
              height={50}
              style={{ width: 50, height: 50 }}
            />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Button>
            Features
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            Services
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button >
                Supporting Staff
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem textValue="New" key="new" >
                <Link href={`/viewstaff`}>View Supporting Staff</Link>
              </DropdownItem>
              <DropdownItem textValue="Copy" key="copy" >
                <Link href={`/addstaff`}>Add Supporting Staff</Link>
              </DropdownItem>
              <DropdownItem textValue="Edit" key="edit" >
                <Link href={`/updatestaff`}>Update Supporting Staff</Link>
              </DropdownItem>
              <DropdownItem textValue="Delete" key="delete" className="text-danger" color="danger" >
                <Link href={`/deletestaff`}>Delete Supporting Staff</Link>
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
              <DropdownItem textValue="New" key="new" >
                <Link href={`/viewteacher`}>View Teachers</Link>
              </DropdownItem>
              <DropdownItem textValue="Copy" key="copy" >
                <Link href={`/addteacher`}>Add Teachers</Link>
              </DropdownItem>
              <DropdownItem textValue="Edit" key="edit" >
                <Link href={`/updateteacher`}>Update Teacher</Link>
              </DropdownItem>
              <DropdownItem textValue="Delete" key="delete" className="text-danger" color="danger" >
                <Link href={`/deleteteacher`}>Delete Teacher</Link>
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
              <DropdownItem textValue="New" key="new" >
                <Link href={`/viewstudent`}>View Student</Link>
              </DropdownItem>
              <DropdownItem textValue="Copy" key="copy" >
                <Link href={`/addstudent`}>Add Student</Link>
              </DropdownItem>
              <DropdownItem textValue="Edit" key="edit" >
                <Link href={`/updatestudent`}>Update Student</Link>
              </DropdownItem>
              <DropdownItem textValue="Delete" key="delete" className="text-danger" color="danger" >
                <Link href={`/deletestudent`}>Delete Student</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Button >
            Expenses
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button >
            About
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="text-white" href="/">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/" variant="flat" >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Button >
            Features
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button >
            Services
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Button >
                Supporting Staff
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem tex textValue="New" key="new" ><Link href={`/viewstaff`}>View Supporting Staff</Link></DropdownItem>
              <DropdownItem tex textValue="Copy" key="copy" ><Link href={`/addstaff`}>Add Supporting Staff</Link></DropdownItem>
              <DropdownItem tex textValue="Edit" key="edit" ><Link href={`/updatestaff`}>Update Supporting Staff</Link></DropdownItem>
              <DropdownItem tex textValue="Delete" key="delete" className="text-danger" color="danger" >
                <Link href={`/deletestaff`}>Delete Supporting Staff</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Button>
                Teachers
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem tex textValue="New" key="new" ><Link href={`/viewteacher`}>View Teachers</Link></DropdownItem>
              <DropdownItem tex textValue="Copy" key="copy" ><Link href={`/addteacher`}>Add Teacher</Link></DropdownItem>
              <DropdownItem tex textValue="Edit" key="edit" ><Link href={`/updateteacher`}>Update Teacher</Link></DropdownItem>
              <DropdownItem tex textValue="Delete" key="delete" className="text-danger" color="danger" >
              <Link href={`/deleteteacher`}>Delete Teacher</Link>
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
              <DropdownItem textValue="New" key="new" ><Link href={`/viewstudent`}>View Students</Link></DropdownItem>
              <DropdownItem textValue="Copy" key="copy" ><Link href={`/addstudent`}>Add Students</Link></DropdownItem>
              <DropdownItem textValue="Edit" key="edit" ><Link href={`/updatestudent`}>Update Students</Link></DropdownItem>
              <DropdownItem textValue="Delete" key="delete" className="text-danger" color="danger" >
              <Link href={`/deletestudent`}>Delete Students</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button >
      Expenses
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button >
            About
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}


// import React from "react";
// import {Navbar,NavbarMenuToggle,NavbarMenu,NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

// export default function App() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];
//   const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//       };
    
//       // Function to close the mobile menu
//       const closeMenu = () => {
//         setIsMenuOpen(false);
//       };

//   return (
//     <Navbar onMenuOpenChange={setIsMenuOpen}>
//       <NavbarContent>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           <AcmeLogo />
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#" >
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarMenu>
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Button  onClick={closeMenu}>
//             <Link
          
//               color={
//                 index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
//               }
//               className="w-full"
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//             </Button>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }
