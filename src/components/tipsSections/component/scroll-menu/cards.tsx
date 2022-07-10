import { Heading, SimpleGrid } from "@chakra-ui/react";
import { MethodCard } from "./methodCard";

export const PostCard = () => {
  return (
    <section>
      <Heading as="h2" size="lg" mx="2em" mt="2em" color={'white'}>
        Cari Tips Seputar SMK : <br />
      </Heading>
      <SimpleGrid columns={[2, null, 3]} mx="2em" justifyItems="center" mb="2em">
        <MethodCard
          id="1"
          imagePath="https://img.freepik.com/free-photo/resumes-desk_144627-43374.jpg?t=st=1655034821~exp=1655035421~hmac=34cbbef2793581cac0de9e79f9be245289c1b983d94abb32cd5eee59d58ef8b1&w=740"
          heading="Cari tahu Bagaimana caranya membuat CV yang baik dan benar"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita corrupti
          voluptas, repellendus cupiditate explicabo."
        />
        <MethodCard
          id="2"
          imagePath="https://img.freepik.com/free-photo/workspace-workplace-office-table_144627-40148.jpg?t=st=1656229724~exp=1656230324~hmac=3b3d21c7c7429bc4e20733e4bf006d5e22425fe0dc192b4880856630a59672b8&w=740"
          heading="Apa sih yang harus kamu lakuin setelah lulus SMK"
          description="Anim reprehenderit culpa duis veniam anim ex ea et eiusmod est. Amet dolor non magna dolor enim sint pariatur voluptate elit pariatur Lorem ad amet. "
        />
        <MethodCard
          id="3"
          imagePath="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?t=st=1656229992~exp=1656230592~hmac=e0f1ff22d091e58a327fd89405083847f4c6cbf9331287bea45322aba47960ac&w=900"
          heading="7 fakta menarik seputar SMK"
          description="Amet ut commodo officia eu minim esse magna veniam non minim. Laborum nostrud excepteur deserunt eiusmod exercitation enim esse. Voluptate Lorem aute non laborum et incididunt. Consequat proident dolore cupidatat deserunt aute Lorem quis."
        />
        <MethodCard
          id="4"
          imagePath="https://img.freepik.com/free-vector/happy-students-jumping-with-flat-design_23-2147905638.jpg?t=st=1656233170~exp=1656233770~hmac=66f3417c7d253bc9d775fe6bd167417a770361034b9cb616c50f856bd7c2add9&w=740"
          heading="ikut ekstrakulikuler saat SMK perlu ngga sih?"
          description="Amet ut commodo officia eu minim esse magna veniam non minim. Laborum nostrud excepteur deserunt eiusmod exercitation enim esse. Voluptate Lorem aute non laborum et incididunt. Consequat proident dolore cupidatat deserunt aute Lorem quis."
        />
      </SimpleGrid>
    </section>
  );
};
