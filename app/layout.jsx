import Nav from '@components/Nav';
import '@styles/globals.css';

export const metadata = {
    title: "Chatsheet",
    description: "Engage with the world around you.",
};

const RootLayout = ({ children }) => {
   return(
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )

}

export default RootLayout;
