import './globals.css'
import StyledComponentsRegistry from './lib/registry'
import Header from './components/header'
import Footer from './components/footer'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
