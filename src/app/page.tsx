import Image from "next/image";
import { MailAtSign01Icon } from "hugeicons-react";
import { PinLocation01Icon } from "hugeicons-react";
import { UserCircleIcon } from "hugeicons-react";
import { Briefcase06Icon } from "hugeicons-react";
import { Mortarboard01Icon } from "hugeicons-react";
import { Calendar01Icon } from "hugeicons-react";
import { WorkItem } from "./components/workItem";

export default function Home() {
  return (
    <div className="bg-mainBgColor min-h-screen flex align-middle justify-center py-6">
      <main className="lg:w-[1024px] space-y-4">
        <div className="flex gap-8 items-center flex-row justify-evenly">
          <div>
            <Image
              className="rounded-full"
              src="https://ifkash.vercel.app/images/gojo.webp"
              height={200}
              width={200}
              alt="profile pic"
            />
          </div>
          <div className="space-y-4">
            <p className="text-3xl">Abidh Kuzhumbil Muhammed</p>
            <p className="flex gap-2">
              <MailAtSign01Icon /> abidhone@gmail.com
            </p>
            <p className="flex gap-2">
              <PinLocation01Icon /> Berlin, Germany
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <div className="space-y-1">
            <p className="text-lg flex gap-2">
              <UserCircleIcon /> Summary
            </p>
            <p className="text-sm">
              Results-oriented Full Stack Developer with 6+ years of experience
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
            <p className="text-lg flex gap-2 pb-8">
              <Briefcase06Icon /> Work
            </p>
            <div className="space-y-8">
              <WorkItem
                role="Fullstack engineer"
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
              <Mortarboard01Icon /> Education
            </p>
            <div className="border-l-2 border-mainBorderColor pl-8">
              <p>Muthoot Institute of Technology and Science</p>
              <p>Bacherlor of Technology, Computer Sciene</p>

              <div className="flex gap-4">
                <p className="flex gap-2">
                  <Calendar01Icon />
                  2014 - 2018
                </p>
                <p>•</p>
                <p className="flex gap-2">
                  <PinLocation01Icon />
                  Kochi, Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
