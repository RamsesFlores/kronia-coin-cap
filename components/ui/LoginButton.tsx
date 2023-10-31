import { Button } from "@nextui-org/react"
import { useSession, signIn, signOut } from "next-auth/react"
import NextLink from 'next/link';

export const LoginButton = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                <Button onClick={() => signOut()} as={NextLink} href="/" variant="flat" className="bg-slate-200 border-1 border-yellow-500 text-slate-900">
                    Cerrar sesión
                </Button>
            </>
        )
    }
    return (
        <>
            <Button onClick={() => signIn()} as={NextLink} href="/" variant="flat" className="bg-slate-200 border-1 border-yellow-500 text-slate-900">
                Iniciar sesion
            </Button>
        </>
    )
}
