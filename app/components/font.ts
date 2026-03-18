import localFont from "next/font/local";
import { Montserrat } from "next/font/google";


export const SVNHelveticaNeueHeavy = localFont({
  src: "/../../public/SVN-Helvetica Neue Heavy.ttf",
  variable: "--font-helvetica-neue-svn",
  weight: "800",
});

export const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});