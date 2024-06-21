import Link from "next/link";

export default function Page404() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="text-foreground">Página no encontrada</p>

      <Link href="/" className="mt-4 text-primary">
        Volver al inicio
      </Link>
    </div>
  );
}
