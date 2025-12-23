"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Container } from "@/components/site/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#030B19]/75 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/5 to-transparent" />

      <Container className="flex h-20 items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden">
            <Image
              src="/logo_agendaplay.png"
              alt="AgendaPlay"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="hidden sm:inline text-lg font-semibold tracking-tight text-white">
            AgendaPlay
          </span>
        </Link>
      </Container>
    </header>
  );
}
