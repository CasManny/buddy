import DyslexiaSidebar from "@/components/dyslexia/DyslexiaSidebar";

export default function DysgraphiaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <DyslexiaSidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}
