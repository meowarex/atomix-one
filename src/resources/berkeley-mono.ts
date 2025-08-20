import localFont from "next/font/local";

// Place your purchased TTF at: public/fonts/BerkeleyMono-Regular.ttf
// Add other weights/styles below if you have them
export const berkeleyMono = localFont({
  src: [
    {
      path: "../../public/fonts/BerkeleyMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-berkeley-mono",
  display: "swap",
});


