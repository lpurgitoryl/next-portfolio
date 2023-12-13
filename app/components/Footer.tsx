import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-black dark:text-white">
      <hr className="" />
      <div className="text-center py-10">
        made by{" "}
        <Link href="https://github.com/lpurgitoryl" className="underline">
          lpurgitoryl
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
