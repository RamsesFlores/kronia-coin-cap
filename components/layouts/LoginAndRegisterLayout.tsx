import { FC, PropsWithChildren } from 'react';
import Head from "next/head";
import { NavbarComponent } from '../ui';

interface Props extends PropsWithChildren {
    title?: string;
}

export const LoginAndRegisterLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Kronia Coin Cap'}</title>
                <meta name="author" content="Ramses Flores" />
                <meta name="description" content={`Informacion sobre criptomones`} />
                <meta name="keywords" content={`Cripto, bitcoin`} />
            </Head>

            <main>
                {children}
            </main>
        </>
    )
}
