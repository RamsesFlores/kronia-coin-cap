import NextLink from 'next/link';
import { Button } from "@nextui-org/react";


export const NoFavorites = () => {
    return (
        <div className="w-full mt-10 text-center">
            <p>No hay favoritos</p>
            <Button as={NextLink} href="/" className="text-small border-1 border-yellow-500 mt-3" radius="full" size="md">
                Ir al listado de criptomonedas
            </Button>
        </div>
    )
}
