import React from "react";
import Image from "next/image";
import front from "../../../../public/front.png";
import Group4 from "../../../../public/Group4.png";
import Group7 from "../../../../public/Group7.png";
import Group11 from "../../../../public/Group11.png";
import Button from "@/app/components/Button";
import Navbar from "@/app/components/Navbar";
import BarIN from "@/app/components/BarIN";
import Card from "@/app/components/Card";
import Rectangle14 from "../../../../public/Rectangle14.png";
import Rectangle15 from "../../../../public/Rectangle15.png";
import Rectangle16 from "../../../../public/Rectangle16.png";
import Rectangle17 from "../../../../public/Rectangle17.png";
import Rectangle18 from "../../../../public/Rectangle18.png";
import Rectangle19 from "../../../../public/Rectangle19.png";

function Home() {
  return (
    <>
      <div>
        <Image
          src={front}
          style={{
            width: "100%",
            height: "100%",
            size: "cover",
            sizes: "100vw",
            position: "absolute",
            zIndex: "-1",
          }}
        />
        <div
          style={{ margin: "auto", padding: "50px 0px" }}
          className="flex flex-col justify-center text-center gap-2"
        >
          <p
            style={{
              fontSize: "24px",
              lineHeight: "35px",
              color: "#F6F6F6",
              fontWeight: "500",
            }}
          >
            WELCOME TO
          </p>
          <h1
            style={{
              fontSize: "64px",
              lineHeight: "87px",
              color: "#F6F6F6",
              fontWeight: "600",
            }}
          >
            Lorem Ipsum
          </h1>
          <div className="flex justify-center">
            <p
              style={{
                fontSize: "26px",
                lineHeight: "36px",
                color: "#F6F6F6",
                fontWeight: "300",
                alignItems: "center",
                maxWidth: "1094px",
                maxHeight: "111px",
                lineHeight: "36px",
              }}
            >
              We deal with different kinds of properties.No matter what you need
              a house, an apartment or garage – you’ll find a good option on our
              site.Thousands of offers and the best prices are guaranteed. Start
              browsing now!
            </p>
          </div>
          <div className="flex gap-11 justify-center">
            <Button
              text="Learn More"
              bgColor="#F6C452"
              radius="51px"
              width="220px"
              size="16px"
              height="50px"
            />
            <Button
              text="Registration"
              color="#303334"
              bgColor="#F6F6F6"
              radius="51px"
              width="220px"
              height="50px"
            />
          </div>
          <Image
            src={Group4}
            style={{
              width: "516px",
              height: "31px",
              size: "cover",
              sizes: "100vw",
              margin: "50px auto",
            }}
          />
          <Navbar />

          <div
            style={{ maxWidth: "80%", margin: "auto" }}
            className="flex flex-col justify-center text-center"
          >
            <div>
              <Image
                src={Group7}
                style={{
                  width: "100%",
                  size: "cover",
                  sizes: "100vw",
                }}
              />
              <div className="flex justify-center gap-10 m-10">
                <BarIN width="w-64" text="welcome" bgColor="#303334" />
                <div>
                  <h1
                    style={{
                      fontSize: "45px",
                      fontWeight: "400",
                      lineHeight: "87px",
                      color: "#303334",
                    }}
                  >
                    WELCOME
                  </h1>
                  <h5 style={{ color: "#6B7176", size: "26px" }}>
                    We'll help you find your new home
                  </h5>
                </div>
                <BarIN width="w-64" text="welcome" bgColor="#303334" />
              </div>
            </div>
            <div className="m-auto flex flex-col">
              <div className="grid grid-cols-3 gap-1">
                <div className="...">
                  <Card
                    cardPrimaryHeading="Dwarka Expressway Projects"
                    cardSecondaryHeading="64 Properties"
                    cardImage={Rectangle15}
                  />
                </div>
                <div className="...">
                  <Card
                    cardPrimaryHeading="Golf Course Extension Road Projects"
                    cardSecondaryHeading="64 Properties"
                    cardImage={Rectangle14}
                  />
                </div>
                <div className="...">
                  <Card
                    cardPrimaryHeading="New Gurgaon (NH-8) Projectss"
                    cardSecondaryHeading="62 Properties"
                    cardImage={Rectangle16}
                  />
                </div>
              </div>
              <Image
                src={Group11}
                style={{
                  width: "100%",
                  height: "2rem",
                  backgroundSize: "cover",
                  // sizes: "100vw",
                  // margin: "50px auto",
                  overflow: "hidden",
                  position: "relative",
                }}
              />
              <div className="grid grid-cols-3 gap-1">
                <div className="...">
                  <Card
                    cardPrimaryHeading="Southern Peripheral Road Projects"
                    cardSecondaryHeading="23 Properties"
                    cardImage={Rectangle17}
                  />
                </div>
                <div className="...">
                  <Card
                    cardPrimaryHeading="Dwarka Expressway Projects"
                    cardSecondaryHeading="64 Properties"
                    cardImage={Rectangle19}
                  />
                </div>
                <div className="...">
                  <Card
                    cardPrimaryHeading="Dwarka Expressway Projects"
                    cardSecondaryHeading="64 Properties"
                    cardImage={Rectangle18}
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <BarIN bgColor="#303334" />
              <div className="flex flex-col w-full mx-5">
                <h1 style={{ textAlign:"left",color: "#303334", fontSize: "3rem" }}>
                  PROPERTIES
                </h1>
                <div className="flex justify-between w-full">
                  <h4 style={{ color: "#6B7176" }}>
                    View our featured properties
                  </h4>
                  <div className="flex justify-between gap-1 ">
                    <BarIN bgColor="#303334" />
                    View All
                    <BarIN bgColor="#303334" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
