import AppLogo from "@/components/shared/app-logo";
import { lusitnan } from "@/components/shared/fonts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { faCheck, faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className={`${lusitnan.className}`}>
        <div className="flex justify-center items-center py-5 px-[25%]">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="">
                <img src="/img/main1.png" width="100%" height="100%" alt="image1" />
                <p className="text-2xl border bg-[#2ff40a] flex flex-grow items-center justify-center my-10">Your Solution for Engineering Data Intelligence Platform</p>
              </CarouselItem>
              <CarouselItem className="">
                <img src="/img/main2.png" width="100%" height="100%" alt="image2" />
                <p className="border bg-red-300 flex items-center justify-center my-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, perspiciatis!</p>
              </CarouselItem>
              <CarouselItem className="">
                <img src="/img/main3.png" width="100%" height="100%" alt="image3" />
                <p className="border bg-red-300 flex items-center justify-center my-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, perspiciatis!</p>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* another section */}
        <div className="bg-[#a5e6ff] grid grid-cols-2">
          <div className="flex flex-col">
            <h5 className="text-sm text-blue-400 pt-0 font-[inter] text-[18px] font-bold uppercase">stroy about us</h5>
            <h3 className="text-lg capitalize font-[inter] font-bold">Create your <span>app page with</span> expert developer</h3>

            <p className="font-[inter] text-[16px] text-[#454545] font-weight-[400] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi vero  vitae ullam amet architecto omnis dolor esse at. Dolore harum explicabo accusantium quas ut recusandae minus quod ipsum consectetur!</p>
            <p className="font-[inter] text-[16px] text-[#454545] font-weight-[400] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi vero vitae ullam amet architecto omnis dolor esse at. Dolore harum explicabo accusantium quas ut recusandae minus quod ipsum consectetur!</p>

            <div className="">
              <h6>Why Choose Us</h6>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span>Lorem ipsum dolor sit amet consectetur?</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span>Lorem ipsum dolor sit amet consectetur </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span>Lorem ipsum dolor sit amet consectetur</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <span>Lorem ipsum dolor sit amet consectetur?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
