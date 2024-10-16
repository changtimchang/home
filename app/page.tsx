import AppLogo from "@/components/shared/app-logo";
import { lusitnan } from "@/components/shared/fonts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { faCheck, faCircle, faCircleCheck, faDrawPolygon } from "@fortawesome/free-solid-svg-icons";
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
          <div className="grid grid-rows-2 grid-cols-2">
            <div className=" p-[18px] mb-[20px] shadow-lg rounded-xl">
              <img className="w-[30%] bg-white p-4 rounded-lg" src="img/speech-bubble.png" alt="ticket" />
              <div className="">
                <h4>Ticket manage</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, delectus.</p>
              </div>
            </div>
            <div className=" p-[18px] mb-[20px] shadow-lg rounded-xl">
              <img className="w-[30%] bg-white p-4 rounded-lg" src="img/ticket.png" alt="ticket" />
              <div className="">
                <h4>Ticket manage</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, delectus.</p>
              </div>
            </div>
            <div className=" p-[18px] mb-[20px] shadow-lg rounded-xl">
              <img className="w-[30%] bg-white p-4 rounded-lg" src="img/file.png" alt="ticket" />
              <div className="">
                <h4>Ticket manage</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, delectus.</p>
              </div>
            </div>
            <div className=" p-[18px] mb-[20px] shadow-lg rounded-xl">
              <img className="w-[30%] bg-white p-4 rounded-lg" src="img/email.png" alt="ticket" />
              <div className="">
                <h4>Ticket manage</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, delectus.</p>
              </div>
            </div>
          </div>
        </div>
        {/* why choose us */}
        <div className="font-[inter] flex flex-col items-center justify-center bg-green-300">
          <h5 className="text-blue-400">Our features</h5>
          <h3 className="text-lg capitalize font-[inter] font-bold">Why choose us</h3>
        </div>

        <div className="">
          <div className="flex flex-row">
            <div className="bg-green-200 p-4 shadow-orange-200 mb-4 w-[96%] border-spacing-2 border-green-200">
              <Card>
                <CardHeader>
                  <CardTitle><FontAwesomeIcon icon={faDrawPolygon} /></CardTitle>
                  <CardDescription>Drag and Drop</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet.</p>
                </CardContent>
                <CardFooter>
                  <p className="bg-slate-200">Read more</p>
                </CardFooter>
              </Card>

            </div>
            <div className="bg-green-200 p-4 shadow-orange-200 mb-4 w-[96%] border-spacing-2 border-green-200">
              dfas
            </div>
            <div className="bg-green-200 p-4 shadow-orange-200 mb-4 w-[96%] border-spacing-2 border-green-200">
              dfas
            </div>
            <div className="bg-green-200 p-4 shadow-orange-200 mb-4 w-[96%] border-spacing-2 border-green-200">
              dfas
            </div>
            <div className="bg-green-200 p-4 shadow-orange-200 mb-4 w-[96%] border-spacing-2 border-green-200">
              dfas
            </div>
            <div className="bg-green-200 p-4 shadow-orange-200 mb-4 w-[96%] border-spacing-2 border-green-200">
              dfas
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
