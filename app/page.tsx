"use client";

import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, useUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { isSignedIn } = useUser(); // Check if user is signed in

  return (
    <div>
      {/* Header */}
      <div className="bg-white p-5 shadow-sm border-b-2 flex justify-between items-center">
        <div className="bg-white flex gap-2 items-center p-2 max-w-lg">
          <Image src={"/logo.svg"} alt="logo" width={120} height={100} />
        </div>

        <div className="flex gap-5 items-end">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" /> // Display UserButton if signed in
          ) : (
            <>
              <User />
              <SignInButton mode="modal">
                <Button variant="secondary">Get Started</Button>
              </SignInButton>
            </>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-8xl font-extrabold text-blue-700 text-center">
          AI Content Generator
        </h1>
        <p className="text-slate-500">
          Elevate Your Content Creation with Intelligent Solutions.
        </p>
        <p className="text-xl text-primary my-8">
          "Save Time, Enhance Quality: AI-Powered Content Generation at Your
          Fingertips!"
        </p>
        <Link href={"/dashboard"} passHref>
          <Button className="my-5">
            Get Started <ArrowRight />
          </Button>
        </Link>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-row gap-7 items-center mx-10 mt-10 my-8 justify-center">
        <FeatureCard
          title="25+ Templates"
          description="Responsive and mobile-first project"
          imgSrc="/temp.jpg"
        />
        <FeatureCard
          title="Customizable"
          description="Components are Easily customizable"
          imgSrc="/cust.jpg"
        />
        <FeatureCard
          title="Free to use"
          description="Every Component and plugins are free to use"
          imgSrc="/free.jpg"
        />
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  return (
    <Card className="bg-blue-100 hover:bg-blue-200 cursor-pointer">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={imgSrc} alt={title} width={120} height={100} />
      </CardContent>
      <CardFooter className="flex flex-row">
        <p className="text-blue-600">Learn More</p>
        <ArrowRight className="text-blue-600" />
      </CardFooter>
    </Card>
  );
}
