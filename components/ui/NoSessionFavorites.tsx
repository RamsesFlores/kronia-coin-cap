import { Button } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import NextLink from 'next/link';

export const NoSessionFavorites = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                <p>Correo {session.user?.email} y su usuario {session.user?.name}</p>
            </>
        )
    }
    return (
        <>
            <div className="w-full mt-10 text-center">
                <p>Inicia sesion para agregar favoritos</p>
                <Button as={NextLink} href="/" className="text-small border-1 border-yellow-500 mt-3" radius="full" size="md">
                    Ir al listado de criptomonedas
                </Button>
            </div>
        </>
    )
}
