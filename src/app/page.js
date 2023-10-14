import '../app/App.css'
import Footer from '@/components/Footer/footer'
import Principal from '@/components/Principal/Principal'
import NewHeader from '@/components/Header/NewHeader'
import Second from '@/components/Second/Second'

export default function Home() {
  return (
    <>
      <NewHeader/>
      <Principal />
      <Second/>
      <Footer/>
    </>
  )
}
