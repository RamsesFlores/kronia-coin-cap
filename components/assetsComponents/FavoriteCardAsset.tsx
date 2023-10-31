import { FC } from "react"
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react"
import { useRouter } from "next/router";

interface Props {
    assetId: string;
}

export const FavoriteCardAsset: FC<Props> = ({ assetId }) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/cripto/${assetId}`)
    }

    return (
        <Card isFooterBlurred className="w-full h-[200px] bg-slate-900" key={assetId}>
            <CardHeader className="absolute z-10 top-1 flex-col items-center">
                <h4 className="text-slate-200 font-medium text-7xl">{assetId}</h4>
            </CardHeader>
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-yellow-500 z-10 justify-between">
                <Button onClick={onFavoriteClicked} className="text-tiny border-1 border-yellow-500" radius="full" size="sm">
                    Ver más
                </Button>
            </CardFooter>
        </Card>
    )
}
