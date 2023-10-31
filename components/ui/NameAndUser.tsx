import { useSession, signIn, signOut } from "next-auth/react"

export const NameAndUser = () => {

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
            <p>Inicia sesion antes</p>
        </>
    )

}
