import { useState } from "react";
import NextLink from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { LoginButton } from ".";

export const NavbarComponent = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Inicio",
        "Favoritos",
    ];

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>

                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <p className="font-bold text-inherit">Coin Cap</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">

                    <NavbarItem>
                        <Link color="foreground" href="/" as={NextLink}>
                            Inicio
                        </Link>
                    </NavbarItem>

                    <NavbarItem isActive>
                        <Link href="/favoritos" aria-current="page" color="warning" as={NextLink}>
                            Favoritos
                        </Link>
                    </NavbarItem>

                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem>
                        <LoginButton />
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </Navbar>
        </>
    );
};
