"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  return (
    <section className="">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
       
        <div>
          <Link href="/rss">
            <button className="p-2">
              <Rss className="w-4 h-4" />
            </button>
          </Link>
         
        </div>
      </div>
  
    </section>
  );
};
