import { FC, PropsWithChildren } from 'react';
import Head from "next/head";
import { NavbarComponent } from '../ui';

interface Props extends PropsWithChildren {
    title?: string;
}

export const LayoutComponent: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Kronia Coin Cap'}</title>
                <meta name="author" content="Ramses Flores" />
                <meta name="description" content={`Informacion sobre criptomones`} />
                <meta name="keywords" content={`Cripto, bitcoin`} />
            </Head>

            <NavbarComponent />
            
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
