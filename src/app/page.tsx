import Link from "next/link";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Link href="/hello" className="underline">
        Posts
      </Link>
    </div>
  );
};

export default Home;
