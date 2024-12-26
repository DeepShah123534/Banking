import MobileNav from '@/components/ui/MobileNav';
import Sidebar from '@/components/ui/Sidebar';
import { sidebarLinks } from '@/constants'; // Ensure this exists
import { cn } from '@/lib/utils';          // Ensure this utility is available
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: 'Deep', lastName: 'Shah'};
  return (
    <main className = "flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>

        <div className = "flex size-full flex-col">

          <div className = "root-layout">
            <Image src = "/icons/logo.svg" width = {30} height = {30} alt ="logo"></Image>
            <div>
              <MobileNav user = {loggedIn}/>
            </div>
          </div>
          {children}
        </div>

    </main> 
  );
}