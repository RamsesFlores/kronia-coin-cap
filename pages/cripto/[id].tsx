import { coinCap } from "@/api";
import { LayoutComponent } from "@/components/layouts";
import { Asset, AssetHistory, AssetsListResponse } from "@/interfaces";
import { Card, CardHeader, CardFooter, Button, CardBody, Image } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { FC } from 'react';

interface Props {
  asset: Asset;
  history: AssetHistory;
}

const AssetPage: FC<Props> = ({ asset, history }) => {

  console.log(history)

  return (
    <LayoutComponent>

      <Card isFooterBlurred className="w-full h-[400px] bg-slate-900 mt-5">

        <CardHeader className="absolute z-10 top-1 flex-col items-center">
          <h4 className="text-slate-200 font-medium text-2xl">{asset.data.symbol}</h4>
        </CardHeader>

        <CardBody className="mt-10">
          <div className="flex gap-2">
            <p className="text-2xl text-yellow-400">Id:</p>
            <p className="text-2xl text-white">{asset.data.id}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-2xl text-yellow-400">Simbolo:</p>
            <p className="text-2xl text-white">{asset.data.symbol}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-2xl text-yellow-400">Nombre:</p>
            <p className="text-2xl text-white">{asset.data.name}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-2xl text-yellow-400">Precio USD:</p>
            <p className="text-2xl text-white">{asset.data.priceUsd}</p>
          </div>
        </CardBody>

        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-yellow-500 z-10 justify-between">
          <div>
            <p className="text-slate-50 text-tiny font-semibold">{asset.data.name}.</p>
            <p className="text-amber-500 text-tiny">Rank #{asset.data.rank}.</p>
          </div>
          <Button className="text-tiny" radius="full" size="sm">
            Favoritos
          </Button>
        </CardFooter>

      </Card>

    </LayoutComponent>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await coinCap.get<AssetsListResponse>('/assets');
  const assetsIds: string[] = data.data.map(asset => asset.id);

  return {
    paths: assetsIds.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };
  const { data } = await coinCap.get<Asset>(`/assets/${id}`);
  const tiempo = await coinCap.get<AssetHistory>(`/assets/${id}/history?start=${data.timestamp - 86400549}&end=${data.timestamp}&interval=h1`);

  return {
    props: {
      asset: data,
      history: tiempo.data
    }
  }
}

export default AssetPage