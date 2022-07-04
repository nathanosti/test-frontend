import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { Button } from "@chakra-ui/react";
import Step01 from "./Step01";

export default function HookForm() {
  const methods = useForm();

  function onSubmit(values: FieldValues) {
    console.log({ values });
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Step01 />

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}
