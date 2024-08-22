import HearingImpairmentSidebar from "@/components/hearing-impairment/HearingImpairmentSidebar";

export default function DysgraphiaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex h-screen">
          <HearingImpairmentSidebar />
      <main className="">{children}</main>
    </div>
  );
}
