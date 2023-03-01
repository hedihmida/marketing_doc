import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                {/* <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="images/logo/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link> */}
                <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
                  Social media contact.
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
             <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                 <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                   <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
               <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                    
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Open Support Ticket
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary/10 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
            Copyright © 2023 doctors. All rights reserved.
            </p>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
