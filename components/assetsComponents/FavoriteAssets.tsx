
import { FC } from "react"
import { FavoriteCardAsset } from ".";

interface Props {
    assets: string[];
}

export const FavoriteAssets: FC<Props> = ({ assets }) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
            {
                assets.map(id => (
                    <FavoriteCardAsset key={id} assetId={id} />
                ))
            }
        </div>
    )
}
