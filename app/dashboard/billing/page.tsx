import React from "react";
import { BellRing, Check, CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function billing() {
  return (
    <div>
      <div className=" flex items-center justify-center my-5 flex-col">
        <h2 className=" font-bold text-primary text-3xl justify-center">
          Upgrade With Monthly Plan
        </h2>
        <div className=" flex flex-row gap-5 items-center  mx-20 my-10  ">
        
        <Card >
          <CardHeader>
            <CardTitle className=" text-center font-bold text-xl">Free</CardTitle>
            <CardDescription className=" font-bold text-3xl text-center text-blue-600">0$/Month</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-flow-col gap-4">
            <div className=" flex flex-col my-5 space-x-4 rounded-md border p-4 ">
                <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500"/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 10,000 Words/Month
                </p>
              </div>
              </div>
              <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500 "/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 50+ Content Templates
                </p>
              </div>
              </div>

              <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500"/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 Unlimited Download and Copy
                </p>
              </div>
              </div>
              <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500"/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 1 Month of History
                </p>
              </div>
            </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full" disabled>
              Currently Active Plan
            </Button>
          </CardFooter>
        </Card>
      
     
        <Card>
          <CardHeader>
            <CardTitle  className=" text-center font-bold text-xl">Monthly</CardTitle>
            <CardDescription className=" font-bold text-3xl text-center text-blue-600">9.99$/Month</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-flow-col gap-4">
            <div className=" flex flex-col my-5 space-x-4 rounded-md border p-4 ">
                <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500"/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 1,00,000 Words/Month
                </p>
              </div>
              </div>
              <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500 "/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 50+ Content Templates
                </p>
              </div>
              </div>

              <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500"/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 Unlimited Download and Copy
                </p>
              </div>
              </div>
              <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500"/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 1 Year of History
                </p>
              </div>
            </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full" variant='outline'>
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle  className=" text-center font-bold text-xl">Yearly</CardTitle>
            <CardDescription className=" font-bold text-3xl text-center text-blue-600">99.99$/Month</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-flow-col gap-4">
            <div className=" flex flex-col my-5 space-x-4 rounded-md border p-4 ">
                <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500"/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 Unlimited Words/Month
                </p>
              </div>
              </div>
              <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500 "/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 100+ Content Templates
                </p>
              </div>
              </div>

              <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500"/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 Unlimited Download and Copy
                </p>
              </div>
              </div>
              <div className=" flex flex-row gap-3 items-start p-4">
              <CheckIcon className=" text-green-500"/>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                 5 Year of History
                </p>
              </div>
            </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full" variant='outline'>
              Get Started
            </Button>
          </CardFooter>
        </Card>
      </div>
      </div>
      

       
    </div>
  );
}

export default billing;
