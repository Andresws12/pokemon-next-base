import AsideLayout from "@/components/layout/AsideLayout";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AsideLayout>{children}</AsideLayout>;
}
