import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ServiceContainer from "@/components/ServiceContainer";
import Image from "next/image";
import { SERVICES, PAYMENTS, GETSTARTED } from "../data";
import Title from "@/components/Title";
import PaymentCard from "@/components/PaymentCard";
import Button from "@/components/Button";
import Card from "@/components/Card";
export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-primary-black-color">
        <div className="container">
          <div className="flex justify-between items-center py-10">
            {SERVICES.map((item, index) => (
              <>
                <ServiceCard
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  key={index}
                />
                {index < SERVICES.length - 1 ? (
                  <div className="h-[150px] min-h-[1em] w-px my-auto self-stretch bg-gradient-to-tr from-transparent to-white opacity-20 dark:opacity-100"></div>
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
        <div className="container flex justify-center items-center py-10">
          <div className="w-1/2 flex flex-col gap-3 px-6">
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
          <div className="w-1/2">
            <div className="flex justify-end items-center">
              <Image className="w-80 h-80" src="/images/card.png" height={200} width={200} alt=""/>
            </div>
          </div>
        </div>
      </section>

      {/* payment section  */}

      <section className="bg-payment">
        <div className="container flex flex-col gap-4 py-10">
          <div className="text-center">
            <Title title="Getting Secured Payment" />
          </div>
          <div className="flex justify-around items-center">
            {PAYMENTS.map((item, index) => (
              <>
                <PaymentCard title={item.title} desc={item.desc} key={index} />
                {index < PAYMENTS.length - 1 ? (
                  <div className="h-[50px] min-h-[1em] w-px my-auto self-stretch bg-gradient-to-tr from-transparent to-black opacity-20 dark:opacity-100"></div>
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
        <div className="container flex justify-center item-center py-10">
          <div className="w-1/3 flex flex-col gap-4">
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
          <div className="w-2/3 flex justify-around">
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
