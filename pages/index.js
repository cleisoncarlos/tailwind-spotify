import Image from 'next/image'
import { Inter } from 'next/font/google'

import { House, MagnifyingGlass, Books, ArrowSquareLeft, ArrowSquareRight, PlayCircle, SkipBack, SkipForward, Shuffle, Repeat } from "@phosphor-icons/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>

      <div className='flex flex-1'>
        <aside className='w-64 bg-zinc-950 p-6'>


          <nav className='space-y-2'>
            <a href='#' className='flex items-center gap-2 font-semibold'>
              <House size={24} weight="duotone" />
              Home
            </a>


            <a href='#' className='flex items-center gap-2 font-semibold'>
              <MagnifyingGlass size={24} weight="duotone" />
              Search
            </a>

            <a href='#' className='flex items-center gap-2 font-semibold'>
              <Books size={24} weight="duotone" />
              Library
            </a>



          </nav>



        </aside>
        <main className='p-6 bg-gradient-to-b from-green-500 to-zinc-900'>

          <div className='flex items-center gap-3'>

            <button>
              <ArrowSquareLeft size={32} weight="duotone" />
            </button>

            <button>
              <ArrowSquareRight size={32} weight="duotone" />
            </button>

          </div>

          <h1 className='font-bold text-3xl my-5'>Good Morning</h1>



          <div className='grid grid-cols-3 gap-4'>

            <div className='bg-white/10 rounded overflow-hidden flex items-center gap-4 group hover:bg-black/10'>

              <Image width={160} height={160} src={'/beatles-cover.jpg'} alt='capa do disco' />
              <strong>Nome do Álbum</strong>

              <button className='mr-4 invisible group-hover:visible'>
                <PlayCircle size={60} color="#22c25d" weight="duotone" />
              </button>
            </div>


            <div className='bg-white/10 rounded overflow-hidden flex items-center gap-4 group hover:bg-black/10'>

              <Image width={160} height={160} src={'/beatles-cover.jpg'} alt='capa do disco' />
              <strong>Nome do Álbum</strong>

              <button className='mr-4 invisible group-hover:visible'>
                <PlayCircle size={60} color="#22c25d" weight="duotone" />
              </button>
            </div>



            <div className='bg-white/10 rounded overflow-hidden flex items-center gap-4 group hover:bg-black/10'>

              <Image width={160} height={160} src={'/beatles-cover.jpg'} alt='capa do disco' />
              <strong>Nome do Álbum</strong>

              <button className='mr-4 invisible group-hover:visible'>
                <PlayCircle size={60} color="#22c25d" weight="duotone" />
              </button>
            </div>



            <div className='bg-white/10 rounded overflow-hidden flex items-center gap-4 group hover:bg-black/10'>

              <Image width={160} height={160} src={'/beatles-cover.jpg'} alt='capa do disco' />
              <strong>Nome do Álbum</strong>

              <button className='mr-4 invisible group-hover:visible'>
                <PlayCircle size={60} color="#22c25d" weight="duotone" />
              </button>
            </div>



            <div className='bg-white/10 rounded overflow-hidden flex items-center gap-4 group hover:bg-black/10'>

              <Image width={160} height={160} src={'/beatles-cover.jpg'} alt='capa do disco' />
              <strong>Nome do Álbum</strong>

              <button className='mr-4 invisible group-hover:visible'>
                <PlayCircle size={60} color="#22c25d" weight="duotone" />
              </button>
            </div>




          </div>



          <h1 className='font-bold text-2xl my-10'>Made for Cleison Carlos</h1>

          <div className='grid grid-cols-6 gap-6'>

            <div className='bg-white/10 overflow-hidden rounded hover:bg-black/10 mb-5'>

              <Image width={240} height={240} src={'/beatles-cover.jpg'} alt='capa do disco' className='w-full p-2' />
              <div className='p-2'>
                <strong>Nome do Álbum</strong>
                <p className='text-zinc-400'>Lorem Ipsum Dolor</p>

              </div>
            </div>

            <div className='bg-white/10 overflow-hidden rounded hover:bg-black/10 mb-5'>

              <Image width={240} height={240} src={'/beatles-cover.jpg'} alt='capa do disco' className='w-full p-2' />
              <div className='p-2'>
                <strong>Nome do Álbum</strong>
                <p className='text-zinc-400'>Lorem Ipsum Dolor</p>

              </div>
            </div>

            <div className='bg-white/10 overflow-hidden rounded hover:bg-black/10 mb-5'>

              <Image width={240} height={240} src={'/beatles-cover.jpg'} alt='capa do disco' className='w-full p-2' />
              <div className='p-2'>
                <strong>Nome do Álbum</strong>
                <p className='text-zinc-400'>Lorem Ipsum Dolor</p>

              </div>
            </div>

            <div className='bg-white/10 overflow-hidden rounded hover:bg-black/10 mb-5'>

              <Image width={240} height={240} src={'/beatles-cover.jpg'} alt='capa do disco' className='w-full p-2' />
              <div className='p-2'>
                <strong>Nome do Álbum</strong>
                <p className='text-zinc-400'>Lorem Ipsum Dolor</p>

              </div>
            </div>

            <div className='bg-white/10 overflow-hidden rounded hover:bg-black/10 mb-5'>

              <Image width={240} height={240} src={'/beatles-cover.jpg'} alt='capa do disco' className='w-full p-2' />
              <div className='p-2'>
                <strong>Nome do Álbum</strong>
                <p className='text-zinc-400'>Lorem Ipsum Dolor</p>

              </div>
            </div>

            <div className='bg-white/10 overflow-hidden rounded hover:bg-black/10 mb-5'>
              <Image width={240} height={240} src={'/beatles-cover.jpg'} alt='capa do disco' className='w-full p-2' />
              <div className='p-2'>
                <strong>Nome do Álbum</strong>
                <p className='text-zinc-400'>Lorem Ipsum Dolor</p>

              </div>
            </div>

          </div>

        </main>
      </div>

      <footer className='bg-zinc-900 p-6 border-t border-zinc-700 flex justify-between'>

        <div className='flex items-center gap-2'>
          <Image width={60} height={60} src={'/beatles-cover.jpg'} alt='capa do disco' />
          <div className='flex flex-col gap-1'>
            <strong>Nome da Música</strong>
            <span className='text-zinc-400'>Nome do artista</span>
          </div>

        </div>
        <div className='flex flex-col items-center'>
          <div className='flex gap-3'>


            <button>
              <Shuffle size={32} weight="duotone" />
            </button>

            <button>
              <SkipBack size={40} weight="duotone" />
            </button>
            <button>
              <PlayCircle size={46} weight="duotone" />
            </button>
            <button>
              <SkipForward size={40} weight="duotone" />
            </button>

            <button>
              <Repeat size={32} weight="duotone" />
            </button>

          </div>
          
        </div>

      </footer>

    </div>
  )
}
