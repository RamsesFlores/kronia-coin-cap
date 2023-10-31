import { GetStaticProps } from 'next';
import { FC } from 'react';

import { LayoutComponent } from '@/components/layouts';
import { coinCap } from '@/api';
import { AssetData, AssetsListResponse } from '@/interfaces';
import { AssetsCard } from '@/components/assetsComponents';

interface Props {
  assets: AssetData[];
}

const Home: FC<Props> = ({ assets }) => {

  return (
    <LayoutComponent title='Lista de criptomonedas'>
      <div className='mt-5 w-full text-center'>
        <p>Bienvenido: unsername correo@gmail.com</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
        {
          assets.map((asset) => (
            <AssetsCard key={asset.rank} asset={asset} />
          ))
        }
      </div>
    </LayoutComponent>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await coinCap.get<AssetsListResponse>('/assets');

  return {
    props: {
      assets: data.data
    }
  }
}

export default Home