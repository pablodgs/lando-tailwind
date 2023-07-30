import { Bodycontact } from './components/Bodycontact'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-8">
    {/* <main className="flex min-h-screen flex-col justify-between px-6 py-8"> */}
      <Navbar/>
      <Bodycontact/>
    </main>
  )
}
