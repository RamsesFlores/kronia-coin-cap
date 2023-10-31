import { useEffect, useState } from "react";
import { LayoutComponent } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { localCriptosFavorites } from "@/utils";
import { FavoriteAssets } from "@/components/assetsComponents";
import { Button } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import NextLink from 'next/link';

const FavoritosPage = () => {

    const { data: session } = useSession()

    const [favoriteAssets, setFavoriteAssets] = useState<string[]>([]);
    useEffect(() => {
        setFavoriteAssets(localCriptosFavorites.criptomonedas());
    }, [])


    if (session) {
        return (
            <LayoutComponent title="Criptos - Favoritos">

                {
                    favoriteAssets.length === 0
                        ? (<NoFavorites />)
                        : (<FavoriteAssets assets={favoriteAssets} />)
                }

            </LayoutComponent>
        )
    }
    return (
        <LayoutComponent title="Criptos - Favoritos">
            <div className="w-full mt-10 text-center">
                <p>Inicia sesion para agregar favoritos</p>
                <Button as={NextLink} href="/" className="text-small border-1 border-yellow-500 mt-3" radius="full" size="md">
                    Ir al listado de criptomonedas
                </Button>
            </div>
        </LayoutComponent>
    )


    // return (
    //     <LayoutComponent title="Criptos - Favoritos">

    //         {
    //             favoriteAssets.length === 0
    //                 ? (<NoFavorites />)
    //                 : (<FavoriteAssets assets={favoriteAssets} />)
    //         }

    //     </LayoutComponent>
    // )
}

export default FavoritosPage;