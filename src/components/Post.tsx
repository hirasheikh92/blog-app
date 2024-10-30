import React, { JSX } from "react";
import Link from "next/link";
import { PostProps } from "@/lib/definition";

export default function Post({
  id,
  title,
  content,
  date,
}: PostProps) : JSX.Element {
  return (
    <div key={id} className="border border-gray-200 p-4 my-4">
      <Link href={`/blog/post/${id}`}>
        <h2>{title}</h2>
        <p className="text-gray-500">{date}</p>
        <p>{content}</p>
      </Link>
    </div>
  );
}
