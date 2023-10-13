"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ServiceContainer from "@/components/ServiceContainer";
import Image from "next/image";
import { SERVICES, PAYMENTS, GETSTARTED, INTEGRATION } from "../data";
import Title from "@/components/Title";
import PaymentCard from "@/components/PaymentCard";
import Button from "@/components/Button";
import Card from "@/components/Card";
import IntegrationCard from "@/components/IntegrationCard";
import InternetBusinessCard from "@/components/InternetBusinessCard";

export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 2000,
         once: false,
       })
 }, [])
  return (
    <main>
      <Hero />
      <section className="bg-primary-black-color overflow-x-hidden overflow-y-hidden">
        <div className="container" data-aos="fade-up">
          <div className="flex flex-col justify-between items-center gap-4 py-10 md:flex-row">
            {SERVICES.map((item, index) => (
              <>
                <ServiceCard
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  key={index}
                />
                {index < SERVICES.length - 1 ? (
                  <div className="hidden md:block md:h-[150px] md:min-h-[1em] md:w-px md:my-auto md:self-stretch md:bg-gradient-to-tr md:from-transparent md:to-white md:opacity-20 md:dark:opacity-100"></div>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* integration part  */}

      <section className="gray-background text-primary-black-color">
        <div className="container flex flex-col justify-center items-center py-10 md:flex-row">
          <div className="w-full flex flex-col gap-3 md:px-6 md:w-1/2">
            <div>
              <Title title="A Complete Integration of payment products" />
            </div>
            <p className="text-lg font-bold">
              Instant Payment. Electronic payments are much <br />
              faster than the traditional methods of payments.
            </p>
            <p className="text-md">
              Online invoice payment helps companies save time, are <br />
              faster and save maximum effort for the clients. it also <br />{" "}
              helps in reducing the excessive physically transaction
            </p>
          </div>
          <div className="w-full md:w-1/2 py-10 overflow-x-hidden overflow-y-hidden">
            <div className="flex flex-col justify-end items-center overflow-y-hidden">
              {/* <Image className="w-80 h-80" src="/images/card.png" height={200} width={200} alt=""/> */}
              <div className="flex gap-4">
                <IntegrationCard
                  title={INTEGRATION[0].title}
                  subtitle={INTEGRATION[0].subtitle}
                  image={INTEGRATION[0].image}
                  aos='fade-right'
                />
                <IntegrationCard
                  title={INTEGRATION[2].title}
                  subtitle={INTEGRATION[2].subtitle}
                  image={INTEGRATION[2].image}
                  styles={{ zIndex: "10" }}
                  aos='fade-left'
                />
              </div>
              <div>
                <IntegrationCard
                  title={INTEGRATION[1].title}
                  subtitle={INTEGRATION[1].subtitle}
                  image={INTEGRATION[1].image}
                  styles={{ marginTop: "-25px" }}
                  aos='fade-up'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* integration part end  */}

      {/* internet business start  */}

      <section>
        <div className="container flex justify-center items-center flex-col md:flex-row">
          <div className="w-full md:w-3/4 flex flex-col gap-3 py-10">
            <div className="w-full md:w-3/4">
              <Title title="The foundation of internet business." />
            </div>

            <div className="w-full md:w-3/4">
              <p className="text-sm">
                Online invoice payment helps companies save time, are faster and
                save maximum effort for the clients. it also helps in reducing
                the excessive physically transaction
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <InternetBusinessCard />
            </div>
          </div>
          <div className="w-full overflow-x-hidden overflow-y-hidden">
            <Image data-aos="zoom-in"
              className="w-80 h-80 md:w-full md:h-full"
              src="/icons/business.svg"
              height={200}
              width={200}
              alt=""
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      {/* payment section  */}

      <section className="bg-payment">
        <div className="container flex flex-col gap-4 py-10">
          <div className="text-center">
            <Title title="Getting Secured Payment" />
          </div>
          <div className="flex flex-col justify-around items-center gap-6 md:gap-4 md:flex-row">
            {PAYMENTS.map((item, index) => (
              <>
                <PaymentCard title={item.title} desc={item.desc} key={index} />
                {index < PAYMENTS.length - 1 ? (
                  <div className="hidden md:block h-[50px] min-h-[1em] w-px my-auto self-stretch bg-gradient-to-tr from-transparent to-black opacity-20 dark:opacity-100"></div>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* payment section end  */}

      {/* getting started section  */}

      <section>
        <div className="container flex flex-col justify-center item-center py-10 md:flex-row">
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <Title title="Get Started?" />
            <p className="text-primary-black-color text-lg">
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Vehicula massa in enim
            </p>
            <div>
              <Button
                title="Join Now"
                style="bg-primary-black-color text-white hover:opacity-90"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-4 justify-around py-5 md:flex-row">
            {GETSTARTED.map((item, index) => (
              <Card
                title={item.title}
                desc={item.desc}
                image={item.image}
                key={index}
              
              />
            ))}
          </div>
        </div>
      </section>

      {/* getting started section end  */}
    </main>
  );
}
