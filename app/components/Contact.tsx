import Link from "next/link";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import user_info from "../utils/user_info.json";

interface ContactProps {
  children: React.ReactNode;
  href: string;
}

const ContactItem = ({ children, href }: ContactProps) => {
  return (
    <div className="w-14 h-8 flex items-center justify-center my-4 hover:shadow-lg px-8 py-8 dark:hover:shadow-white rounded-xl">
      <Link href={href} target="_blank">
        <span className="block relative z-10">{children}</span>
      </Link>
    </div>
  );
};

function Contact() {
  return (
    <section
      className="h-full flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white"
      id="contact"
    >
      <h1 className="text-7xl md:text-9xl">Contact</h1>
      <p className="my-12 text-xl md:w-4/5">
        Check out my resume for more about me and feel free to connect using any
        method below!
      </p>
      <Link
        href="/resume.pdf"
        target="_blank"
        className="flex flex-row justify-center items-center cursor-pointer bg-accent-500 py-4 px-6 rounded-full transition-transform duration-200 hover:scale-105"
      >
        <DownloadIcon height={32} width={32} color="white" />
        <p className="text-xl text-white md:w-4/5">View Resume</p>
      </Link>
      <div className="flex my-14">
        <div className="border-r-2 border-black dark:border-white">
          <div className="flex flex-col justify-between items-center h-full mx-4">
            <p className="text-xl my-8">socials</p>
            <p className="text-xl my-8">message</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-4 mx-4">
            <ContactItem href={user_info.linkedin}>
              <LinkedInLogoIcon height={40} width={40} />
            </ContactItem>
            <ContactItem
              href={"https://github.com/" + user_info.github_username}
            >
              <GitHubLogoIcon height={40} width={40} />
            </ContactItem>
          </div>
          <div className="flex flex-row gap-4 mx-4">
            <ContactItem href={"mailto:" + user_info.email}>
              <EnvelopeClosedIcon height={40} width={40} />
            </ContactItem>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
