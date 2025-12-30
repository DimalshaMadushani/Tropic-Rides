import Image from "next/image";
import { Card } from "./Card";
import { Button } from "./Button";

export function ItemCard({
  title,
  subtitle,
  imageSrc,
  meta,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
  meta?: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-44 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">{title}</p>
            <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
          </div>
          {meta ? (
            <div className="rounded-xl bg-sand-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {meta}
            </div>
          ) : null}
        </div>

        <div className="mt-4">
          <Button
            href="https://wa.me/0000000000"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            Ask availability
          </Button>
        </div>
      </div>
    </Card>
  );
}
