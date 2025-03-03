import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemon Dashboard",
  description: "SEO Title",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="mt-2 text-xl">Overview</span>
    </div>
  );
}
