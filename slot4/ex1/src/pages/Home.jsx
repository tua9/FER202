import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import BookTable from '../components/BookTable'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <Menu />
      <BookTable />
      <Footer
        info={{
          src: 'https://i.pravatar.cc/150?img=1',
          name: 'John Doe',
          email: 'john.doe@example.com',
        }}
      />
    </>
  )
}
