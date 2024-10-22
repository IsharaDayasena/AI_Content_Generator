"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/utils/db"; // Ensure correct import
import { AIOutput } from "@/utils/schema"; // Import schema
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export interface AIOutputData {
  id: number;
  formData: string | null;
  templateSlug: string;
  aiResponse: string ;
  createdBy: string | null;
  createdAt: string | Date;
}

function TableCon() {
  const [data, setData] = useState<AIOutputData[]>([]);

  const fetchData = async () => {
    try {
      const result = (await db.select().from(AIOutput)) as AIOutputData[];
      console.log("Fetched Data:", result);

      if (Array.isArray(result)) {
        setData(result);
      } else {
        console.error("Unexpected data format:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).length; // Split by whitespace and count words
  };

  return (
    <div className="overflow-x-auto flex"> 
      <Table className=" bg-white p-5 mt-5 items-center ">
        <TableCaption>A list of your recent.</TableCaption>
        <TableHeader className=" bg-slate-100 ">
          <TableRow className=" w-[100px] ">
            <TableHead className="w-[10px]">ID</TableHead>
            <TableHead className="w-[50px]">Niche/Keywords</TableHead>
            <TableHead className="w-[100px]">Template Slug</TableHead>
            <TableHead className="w-[100px] line-clamp-3">AI Response</TableHead>
            <TableHead className="w-[100px]">Word Count</TableHead>
            <TableHead className="w-[100px]">Copy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((item) => (
              <TableRow key={item.id} className=" bg-slate-200 boarder ">
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.formData}</TableCell>
                <TableCell>{item.templateSlug}</TableCell>
                <TableCell>{item.aiResponse}</TableCell>
                <TableCell>{getWordCount(item.aiResponse)}</TableCell>
                <TableCell><Button  onClick={()=> navigator.clipboard.writeText(item.aiResponse)} ><Copy/> </Button></TableCell>
                
                 </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableCon;
