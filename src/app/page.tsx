import Image from "next/image";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { WorkItem } from "./components/workItem";

export default function Home() {
  return (
    <div className="bg-mainBgColor min-h-screen flex align-middle justify-center md:py-20">
      <main className="lg:w-[1024px] space-y-4 p-6 md:p-4 xl:p-2">
        <div className="flex gap-8 items-center flex-col sm:flex-row">
          <div>
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/22368311?v=4"
              height={200}
              width={200}
              alt="profile pic"
            />
          </div>
          <div className=" flex-1 flex justify-center">
            <div className="space-y-4">
              <p className="text-3xl text-center">Abidh Kuzhumbil Muhammed</p>
              <div className="space-y-2">
                <p className="flex gap-2 items-center justify-center sm:justify-start">
                  <FontAwesomeIcon icon={faEnvelope} height={20} />{" "}
                  abidhone@gmail.com
                </p>
                <p className="flex gap-2 justify-center sm:justify-start">
                  📍 Berlin, Germany
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10 pt-8">
          <div className="flex gap-8 flex-wrap">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faLinkedin} height={20} />
              <a
                className="text-mainLinkColor text-lg"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abidhkm/"
              >
                Linkedin
              </a>
            </div>

            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faGithub} height={20} />
              <a
                className="text-mainLinkColor text-lg"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/abidhkm/"
              >
                Github
              </a>
            </div>

            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faStackOverflow} height={20} />
              <a
                className="text-mainLinkColor text-lg"
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.com/users/story/7787290"
              >
                Stackoverflow
              </a>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-lg flex gap-2 items-center">
              <FontAwesomeIcon icon={faBolt} height={20} />
              Summary
            </p>
            <p className="text-base">
              Results-oriented Full stack developer with 6+ years of experience
              in architecting, designing, and building robust, scalable web
              applications. Proficient in JavaScript ecosystem (React, Node.js,
              TypeScript) and adept at delivering exceptional user experiences.
              Passionate about writing clean, testable code through practices
              like Test-Driven Development and pair programming. Seeking a
              challenging role to contribute to innovative products, foster team
              collaboration, and drive business impact.
            </p>
          </div>

          <div>
            <p className="text-lg flex gap-2 pb-8 items-center">
              <FontAwesomeIcon icon={faBriefcase} height={20} /> Work
            </p>
            <div className="space-y-8">
              <WorkItem
                role="Full stack engineer"
                companyName="Erblotse"
                timePeriod="03.2023 - 07.2024"
                location="Berlin, Germany"
              />
              <WorkItem
                role="Frontend engineer"
                companyName="Modifi GmbH"
                timePeriod="02.2022 - 02.2023"
                location="Berlin, Germany"
              />
              <WorkItem
                role="Frontend engineer"
                companyName="Mashreq Bank"
                timePeriod="08.2020 - 01.2022"
                location="Dubai, UAE"
              />
              <WorkItem
                role="Software engineer"
                companyName="Dexlock"
                timePeriod="06.2018 - 07.2020"
                location="Kochi, India"
              />
            </div>
          </div>

          <div>
            <p className="text-lg flex gap-2 pb-8">
              <FontAwesomeIcon icon={faGraduationCap} height={20} /> Education
            </p>
            <div className="border-l-2 border-mainBorderColor pl-8 space-y-2">
              <p>Bacherlor of Technology, Computer Sciene and Engineering</p>
              <p className="text-secondaryTextColor">
                Muthoot Institute of Technology and Science
              </p>

              <div className="flex gap-4 text-secondaryTextColor">
                <p className="flex gap-2">📆 2014 - 2018</p>
                <p>•</p>
                <p className="flex gap-2">Kochi, Kerala 📍</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
