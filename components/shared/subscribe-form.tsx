'use client'
import { subscribe } from "@/actions/subscribe";
import { useAction } from "next-safe-action/hooks";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

export default function SubscribeForm() {
  const { toast } = useToast()

  const { execute } = useAction(subscribe, {
    onSuccess: (props) => {
      if (props?.data?.status !== 200) {
        toast({
          title: "¡Ups!",
          description: "Ha ocurrido un error, por favor intenta de nuevo.",
          variant: "destructive",
        })

        return
      }

      toast({
        title: "¡Gracias por subscribirte!",
        description: "Te hemos enviado un correo de confirmación.",
      })
    },
  });


  return <form className="flex flex-col md:flex-row md:items-center gap-2" onSubmit={(e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    execute(email);
  }}>
    <Input
      type="email"
      placeholder="Correo electrónico"
      className="flex-1 flex-shrink-0 min-h-12"
      name="email"
    />
    <Button
      className="rounded-md w-full md:w-40 flex-shrink-0"
      size="xl"
      variant={"secondary"}
      type="submit"
    >
      Subscribirme
    </Button>
  </form>
}
