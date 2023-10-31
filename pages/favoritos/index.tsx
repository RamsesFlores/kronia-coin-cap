import { useEffect, useState } from "react";
import { LayoutComponent } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { localCriptosFavorites } from "@/utils";
import { FavoriteAssets } from "@/components/assetsComponents";

const FavoritosPage = () => {

    const [favoriteAssets, setFavoriteAssets] = useState<string[]>([]);
    useEffect(() => {
        setFavoriteAssets(localCriptosFavorites.criptomonedas());
    }, [])


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

export default FavoritosPage;