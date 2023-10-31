import { FC } from "react"
import { useRouter } from "next/router";
import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";
import { AssetData } from "@/interfaces";

interface Props {
    asset: AssetData
}

export const AssetsCard: FC<Props> = ({ asset: { id, rank, name, symbol } }) => {

    const router = useRouter();

    const onAssetClick = () => {
        router.push(`/cripto/${id}`)
    }

    return (
        <>
            <Card isFooterBlurred className="w-full h-[200px] bg-slate-900">
                <CardHeader className="absolute z-10 top-1 flex-col items-center">
                    <h4 className="text-slate-200 font-medium text-7xl">{symbol}</h4>
                </CardHeader>
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-yellow-500 z-10 justify-between">
                    <div>
                        <p className="text-slate-50 text-tiny font-semibold">{name}.</p>
                        <p className="text-amber-500 text-tiny">Rank #{rank}.</p>
                    </div>
                    <Button className="text-tiny border-1 border-yellow-500" radius="full" size="sm" onClick={onAssetClick}>
                        Ver más
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
