import { Container } from "@/components/site/container";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030B19]">
      {/* FUNDO VIVO */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[#050F24] via-[#030B19] to-[#020814]" />

        <div className="absolute -top-40 left-1/2 h-175 w-300 -translate-x-1/2 rounded-full bg-linear-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-[140px]" />
        <div className="absolute top-40 left-1/3 h-150 w-250 -translate-x-1/2 rounded-full bg-linear-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 blur-[160px]" />
        <div className="absolute top-[30%] left-2/3 h-125 w-225 -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-500/10 via-sky-500/10 to-cyan-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <main>
        <section className="pt-14 sm:pt-20 pb-10">
          <Container className="text-center">
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-white">
              Agora você pode ter
              <br />
              <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                o seu próprio APP.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm text-white/70 sm:text-base">
              Assita o vídeo e veja todas as possibilidades que a AgendaPlay
              oferece para você aumentar seu faturamento sem precisar aumentar
              sua carga de trabalho.
            </p>

            <div className="relative mt-10">
              <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-52 bg-linear-to-r from-cyan-500/30 via-emerald-500/30 to-teal-500/30 blur-[120px]" />

              <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-black/40 p-3 shadow-2xl backdrop-blur">
                <div className="aspect-video w-full rounded-xl bg-black/70" />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
