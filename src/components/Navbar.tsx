import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Store, ShoppingBasket,User, LogOut } from 'lucide-react'
import ModeToggle from './ModeToggle'
import { stackServerApp,  } from '@/stack'
import { getUserDetails} from '@/actions/user.action'
import { UserButton } from '@stackframe/stack';

async function Navbar() {
    const user = await stackServerApp.getUser();
    const app = stackServerApp.urls;
    const userProfile = await getUserDetails(user?.id);

  return (
    <nav className='sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>

        <div className='max-w-7xl mx-auto px-4'>
        
        <div className='flex justify-between h-16 items-center'>

            {/* Logo */}
            <div className='flex items-center'>
                <Link href='/'
                className='text-xl font-bold text-primary font-mono tracking-wider'>
                    My CRUD
                </Link>
            </div>

            {/* Navbar components */}

            {userProfile?.name && <span className="text-[14px] text-gray-600 dark:text-gray-300">
            {`Hello, ${userProfile?.name.split(' ')[0]}`}
            </span>}

            <div className='hidden md:flex items-center space-x-4'>

                {/* go to products page */}
                <Button variant='ghost' className='flex items-center gap-2' asChild>
                    <Link href='/products'>
                        <ShoppingBasket className='w-4 h-4' />
                        <span className='hidden lg:inline'>Shopping</span>
                    </Link>
                </Button>

                {/* go to Home page */}
                <Button variant='ghost' className='flex items-center gap-2' asChild>
                    <Link href='/'>
                        <Store className='w-4 h-4'/>
                        <span className='hidden lg:inline'>Home</span>
                    </Link>
                </Button>

                {/* Toggle dark / light mode */}
                <ModeToggle/>

                {/* Sign out or Sign in */}
                {user ? (
                    <>
                    {/* Sign out button */}
                        <Button variant='ghost' className='flex items-center gap-2' asChild>
                            <Link href={app.signOut}>
                                <LogOut className='w-4 h-4'/>

                                <span className='hidden lg:inline'>Sign out</span>
                            </Link>
                        </Button>
                        <UserButton />
                    </>
                ) : (
                <>
                {/* Sign in button */}
                    <Button variant='ghost' className='flex items-center gap-2' asChild>
                        <Link href={app.signIn}>
                            <User className='w-4 h-4'/>

                            <span className='hidden lg:inline'>Sign in</span>
                        </Link>
                    </Button>
                </>)}


            </div>

        </div>

        </div>
    </nav>
  )
}

export default Navbar