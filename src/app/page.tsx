import Image from 'next/image'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="inline-flex mx-32">
        <div className="w-1/2">
          <div className="w-full mt-32 px-12">
            <p className="my-6 text-gray-500 font-bold uppercase">
              Free 30-days trial. No credit card required.
            </p>
            <h1 className="text-7xl font-bold">The best way to showcase your project.</h1>
            <p className="my-6 text-gray-500">
              Here you can put a short description about your project.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-6 mr-64 ml-8 px-4'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Try for free
            </button>
            <button className="bg-transparent hover:bg-gray-300 text-black font-semibold py-2 px-4 border border-black rounded-lg">
              See how it works
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <Image src="/Lando01.png" alt="" className="w-full" width={1024} height={1024} />
        </div>
      </div>
      <div className="my-16 mx-96">
        <div className='flex justify-center'>
          <h3 className='text-gray-500'>Trusted by individuals and teams at the world's best companies</h3>
        </div>
        <div className="grid grid-cols-6 mt-2 mx-24">
          <h2 className="flex justify-center text-gray-400 text-3xl font-semibold">Logo</h2>
          <h2 className="flex justify-center text-gray-400 text-3xl font-semibold">Logo</h2>
          <h2 className="flex justify-center text-gray-400 text-3xl font-semibold">Logo</h2>
          <h2 className="flex justify-center text-gray-400 text-3xl font-semibold">Logo</h2>
          <h2 className="flex justify-center text-gray-400 text-3xl font-semibold">Logo</h2>
          <h2 className="flex justify-center text-gray-400 text-3xl font-semibold">Logo</h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}
