import { Sets } from "@/Types/Types";
import { getData } from "../data";
import { CollectionProvider } from "@/utils/ContextProvider";
import { Accordion } from "@/components/Organisms/Accordion/Accordion";

export default async function Cards() {
  const sets = (await getData()).props.sets as Sets[];
  sets.sort((a, b) => {
    return a.setId?.localeCompare(b.setId);
  });
  return (
    <div className="mx-4 flex flex-col items-center gap-10 mt-20">
      <p className="text-center underline underline-offset-8">
        Here you can find all the Cards available at the moment
      </p>
      <CollectionProvider>
        <Accordion className="mb-1 w-full mx-4" sets={sets as Sets[]} />
      </CollectionProvider>
    </div>
  );
}
