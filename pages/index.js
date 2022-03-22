import Navbar from '../src/components/navbar'
import Banner from '../src/components/banner'
import Styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={Styles.appContainer}>
        <Banner />
      </div>
    </>
  )
}
