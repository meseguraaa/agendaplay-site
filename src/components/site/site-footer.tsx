import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/site/container";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-white/60 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#030B19]">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-1">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-sm font-semibold text-white">AgendaPlay</div>
            <p className="mt-3 text-sm text-white/60">
              Seu negócio com app próprio com agendamentos e gestão em um só
              lugar.
            </p>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} AgendaPlay. Todos os direitos
            reservados.
          </span>
        </div>
      </Container>
    </footer>
  );
}
