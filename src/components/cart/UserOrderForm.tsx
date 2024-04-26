import { Label, TextInput, Textarea } from "flowbite-react";
import { FC } from "react";

const UserOrderForm: FC = () => {

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-row gap-4 w-full">
        <div className="flex flex-col gap-6 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="numeFam" value="Nume" />
            </div>
            <TextInput id="numeFam" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="telefon" value="Numar de telefon" />
            </div>
            <TextInput id="telefon" type="text" sizing="md" />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="prenume" value="Prenume" />
            </div>
            <TextInput id="prenume" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" type="text" addon="@" sizing="md" placeholder="name@flowbite.com" />
          </div>
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="adresa" value="Adresa" />
        </div>
        <TextInput id="adresa" type="text" sizing="md" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="mesaj" value="Mesaj" />
        </div>
        <Textarea id="comment" placeholder="Lasa un comentariu..." required rows={4} />
      </div>
    </div>

  )
}

export default UserOrderForm;