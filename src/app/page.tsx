import { Bodycontact } from './components/Bodycontact'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <div className="mx-32">
      <main>
      {/* <main className="flex min-h-screen flex-col justify-between px-6 py-8"> */}
        <Navbar/>
        <Bodycontact/>
      </main>
      <Footer/>
    </div>
  )
}
