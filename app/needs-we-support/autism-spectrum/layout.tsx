import AutismSpectrumSidebar from "@/components/autism-spectrum/AutismSpectrumSidebar";

export default function DysgraphiaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <AutismSpectrumSidebar />
      <main className="">{children}</main>
    </div>
  );
}
