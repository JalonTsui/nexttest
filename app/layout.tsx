import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="md:flex container mx-auto px-4">
          <div className="grow">123</div>
          <div className="grow-[4]">{children}</div>
        </div>
        {/* <div className="md:columns-4 lg:columns-6 columns-2">
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
          <div className="w-full">123</div>
        </div> */}
      </body>
    </html>
  );
}
