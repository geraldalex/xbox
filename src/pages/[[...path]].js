import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'lib/router'


function ActiveLink({children, ...props}){
  const {pathname} = useRouter()
  const active = pathname === props.href
  return (
    <Link {...props} >
      <a className={clsx('block p-3 text-sm hover:underline', active && 'text-green-700')}>{children}</a>
    </Link>
  )
}

export default function Home() {
  return (
    <>
    <Head>
      <title>
        Xbox Catalog
      </title>
    </Head>
    <main className='flex mx-6 my-8'>
      <aside className='w-60  flex-shrink-0'>
        <h3 className='text-2xl font-bold'>Collections</h3>
        <hr className='border-gray-300 mt-8 mb-4' />
        <ul className='ml-2 space-y-2 mb-5'>
        <li>
        <ActiveLink href='/' shallow>
        All Xbox Games
        </ActiveLink>
        </li>
        <li>
        <ActiveLink href='/new-releases' shallow>
        New Releases
        </ActiveLink>
        </li>
        <li>
        <ActiveLink href='/most-played' shallow>
        Most Played
        </ActiveLink>
        </li>
        </ul>
       <form >
        <h3 className='text-2xl font-bold mb-4'>Filters</h3>
        <button type='reset' className='font-extrabold uppercase text-green-700'>Clear Filters</button>
        <hr className='border-gray-300 mt-4 mb-2' />
        <details className='bg-gray-50'>
          <summary className='cursor-pointer p-3 mb-1 bg-gray-100 hover:shadow hover:bg-gray-300 '>
          <svg
          className='arrow-icon w-7 h-7 mr-1 inline-block transform transition-transform -rotate-90'
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          >
       <path
          d="M91.9,46.9L64,74.8L36.1,46.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l30,30c0.6,0.6,1.4,0.9,2.1,0.9 s1.5-0.3,2.1-0.9l30-30c1.2-1.2,1.2-3.1,0-4.2C94.9,45.7,93.1,45.7,91.9,46.9z"
        />
          </svg>
          Available on</summary>
          <fieldset className=''>
            <div className='relative '>
              <input
              id='xbox-series-x-s'
              name='available-on'
               type="radio"
                className='absolute invisible h-0 w-0 availability-radio'/>
              <label htmlFor="xbox-series-x-s" className='block p-4 cursor-pointer hover:bg-gray-300 availability-label'>
              Xbox Series X|S
              </label>
            </div>

            <div className='relative'>
              <input
              id='xbox-one'
              name='available-on'
               type="radio"
                className='absolute invisible h-0 w-0 availability-radio'/>
              <label htmlFor="xbox-one" className='block p-4 cursor-pointer hover:bg-gray-300 availability-label'>
              Xbox One
              </label>
            </div>

            <div className='relative'>
              <input
              id='xbox-360'
              name='available-on'
               type="radio"
                className='absolute invisible h-0 w-0 availability-radio'/>
              <label htmlFor="xbox-360" className='block p-4 cursor-pointer hover:bg-gray-300 availability-label'>
              Xbox 360
              </label>
            </div>

            <div className='relative'>
              <input
              id='pc'
              name='available-on'
               type="radio"
                className='absolute invisible h-0 w-0 availability-radio'/>
              <label htmlFor="pc" className='block p-4 cursor-pointer hover:bg-gray-300 availability-label'>
              PC
              </label>
            </div>


          </fieldset>
       
        </details>
        </form>
      </aside>
      <section className='ml-12'>
      <div className='text-xs my-3'>Viewing 1-20 of 554 results</div>
      
      <button type='reset' className='font-extrabold uppercase text-green-700'>Clear Filters</button>
      <div className='flex gap-5 flex-wrap'>
        {
          [...new Array(5)].map((_, i) => (
            <article  key={i} className='product relative flex flex-col w-[150px]'>
            <div className='product-image transform transition mb-2'>
              <Image
src='https://store-images.s-microsoft.com/image/apps.57565.71718434425658872.697ca9fd-3b48-4708-b6bf-b97acc67c244.88890908-dcdf-4b03-8e73-4a10af21f949'
width='150'
height='225'
alt=''
              />
              </div>
              <span className='bg-gray-200 inline-block px-1 uppercase text-xs leading-relaxed tracking-wider mb-3'>40% off</span>
              <h3 className='text-sm'>
              <a className='leading-tight inline-block game-link text-sm hover:underline' href="#">A Way Out</a>
              </h3>
              <div className='text-lg'>
                <span className='line-through text-gray-600 pr-2'>$99.99</span>
               $19.99
              </div>
            </article>
          ))
        }
      </div>
      </section>
    </main>
    
    </>
  )
}
