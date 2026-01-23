import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const helveticaNeueHeavy = localFont({
  src: "/../../public/HelveticaNeue Heavy.ttf",
  variable: "--font-helvetica-neue-heavy",
});

export const SVNHelveticaNeueHeavy = localFont({
  src: "/../../public/SVN-Helvetica Neue Heavy.ttf",
  variable: "--font-helvetica-neue-heavy",
});

export const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});