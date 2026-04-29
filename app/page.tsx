import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "#ff5500",
          fontSize: "20px",
        }}
      >
        Swaroop.dev — Building... 🚀
      </div>
    </main>
  );
}
