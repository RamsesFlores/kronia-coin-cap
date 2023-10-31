import { LoginAndRegisterLayout } from '@/components/layouts'
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Link } from '@nextui-org/react'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';


const login = () => {

    const router = useRouter();
    
    const onLoginClicked = () => {
        signIn('credentials',{id: "1", name: "J Smith Watson", email: "jsmith@example.com"});
    }

    const { data: session } = useSession()
    if (session) {
        router.push('/');
    }

    return (
        <LoginAndRegisterLayout>
            <div className='w-full h-screen flex items-center justify-center'>
                <Card>

                    <CardHeader className='mt-10'>
                        <div className="text-center flex-1">
                            <p className="text-md">Bienvenido a Coin Cap</p>
                            <p className="text-small text-yellow-500">Iniciar sesión</p>
                        </div>
                    </CardHeader>

                    <CardBody className='mt-2'>
                        <p className='text-sm mb-2'>Ingresa tu usuario</p>
                        <Input type="text" label="Usuario" size='sm' isRequired />
                        <p className='text-sm mb-2 mt-2'>Ingresa tu contraseña</p>
                        <Input type="password" label="password" size='sm' isRequired />

                        <Button onClick={onLoginClicked} as={NextLink} href="/" className="border-1 border-yellow-500 mt-8 bg-slate-50" radius="sm" size="md">
                            Iniciar sesión
                        </Button>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <div className='flex-1 text-center'>
                            <p className='text-sm mb-2'>No tienes una cuenta?</p>
                            <p className='text-sm mb-2'>Ingresa para registrarte</p>
                            <Button as={NextLink} href="/auth/register" className="border-1 border-yellow-500 mt-1 bg-slate-50" radius="sm" size="sm">
                                Ir a registro
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </LoginAndRegisterLayout>
    )
}

export default login