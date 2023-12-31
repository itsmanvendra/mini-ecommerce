import './globals.css'
import {ContextProvider} from '../context/Context'

export const metadata = {
  title: 'Shopsy',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
