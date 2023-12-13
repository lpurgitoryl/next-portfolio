import Link from "next/link";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";

interface ContactProps {
  children: React.ReactNode;
  href: string;
}

const ContactItem = ({ children, href }: ContactProps) => {
  return (
    <div className="w-14 h-8 flex items-center justify-center my-4">
      <Link href={href} target="_blank">
        <span className="block relative z-10">{children}</span>
      </Link>
    </div>
  );
};

function Contact() {
  return (
    <section
      className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white"
      id="contact"
    >
      <h1 className="text-7xl md:text-9xl">Contact</h1>
      <div className="flex my-10">
        <div className="border-r-2 border-black">
          <div className="flex flex-col justify-between h-full mx-4">
            <p className="text-xl my-4">socials</p>
            <p className="text-xl my-4">message</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-4 mx-4">
            <ContactItem href="https://www.linkedin.com/in/nicoleb-garcia/">
              <LinkedInLogoIcon height={40} width={40} />
            </ContactItem>
            <ContactItem href="https://github.com/lpurgitoryl">
              <GitHubLogoIcon height={40} width={40} />
            </ContactItem>
          </div>
          <div className="flex flex-row gap-4 mx-4">
            <ContactItem href="mailto:ngarcia201@gmail.com">
              <EnvelopeClosedIcon height={40} width={40} />
            </ContactItem>
            <ContactItem href="tel:9515633544">
              <ChatBubbleIcon height={40} width={40} />
            </ContactItem>
          </div>
        </div>
      </div>

      <p className="my-12 text-xl md:w-4/5"></p>
    </section>
  );
}

export default Contact;
