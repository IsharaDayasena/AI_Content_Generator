"use client";

import { AIOutputData } from '@/app/history/_components/Table';
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import React, { useEffect, useState } from 'react';

function UsageTrack() {
  const [totalWords, setTotalWords] = useState<number>(0); // State for total word count

  const GetData = async () => {
    try {
      console.log("Fetching all AIOutput data...");
      const result: AIOutputData[] = await db.select().from(AIOutput); // Fetch all data
      console.log("Fetched AIOutput Data:", result); // Log fetched data
      GetTotalUsage(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const GetTotalUsage = (result: AIOutputData[]) => {
    let total = 0;
    result.forEach((element) => {
      const wordCount = getWordCount(element.aiResponse);
      console.log(`AI Response: "${element.aiResponse}" - Word Count: ${wordCount}`); // Log each word count
      total += wordCount;
    });
    console.log("Total Word Count:", total); // Log total word count
    setTotalWords(total);
  };

  const getWordCount = (text: string): number => {
    return text ? text.trim().split(/\s+/).length : 0; // Handle empty or null responses
  };

  useEffect(() => {
    GetData(); // Fetch data on component mount
  }, []);

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#8185f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${(totalWords / 10000) * 100}%` }}
          />
        </div>
        <h2 className="text-sm py-2">{totalWords}/10,000 Words Used</h2>
      </div>
      <Button variant="secondary" className="w-full my-3 text-primary">
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
