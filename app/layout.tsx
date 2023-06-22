import './globals.css'
import StyledComponentsRegistry from './lib/registry'
import Header from './components/header'
import Footer from './components/footer'


export const metadata = {
  title: 'Home',
  description: 'Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
        <Header/>
        {children}
        <Footer/>
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
