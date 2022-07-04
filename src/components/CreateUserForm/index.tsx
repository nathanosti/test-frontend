import { useState } from "react";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { Flex, Button } from "@chakra-ui/react";

import Step01 from "./Step01";
import Step02 from "./Step02";
import Step03 from "./Step03";
import Step04 from "./Step04";

export default function CreateUserForm() {
  const [step, setStep] = useState(0);

  const methods = useForm();

  function onSubmit(values: FieldValues) {
    console.log({ values });
    setStep(step + 1);
  }

  function handleSetStep() {
    switch (step) {
      case 0:
        return <Step01 />;
        break;
      case 1:
        return <Step02 />;
        break;
      case 2:
        return <Step03 />;
        break;
      case 3:
        return <Step04 />;
        break;
    }
  }

  function renderButton() {
    if (step === 3) return;

    return (
      <Flex justifyContent="space-between" mt={10}>
        {step === 2 ? (
          <>
            <Button type="button">Voltar</Button>
            <Button type="submit">Enviar</Button>
          </>
        ) : (
          <>
            <Button
              type="button"
              disabled={step === 0 && true}
              onClick={() => {
                step > 0 && setStep(step - 1);
              }}
            >
              Voltar
            </Button>
            <Button type="submit">Próximo</Button>
          </>
        )}
      </Flex>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Flex
          flexDir="column"
          p={20}
          width={520}
          borderRadius={27}
          border="1px solid #1e3a4330"
          boxShadow="xl"
        >
          {handleSetStep()}

          {renderButton()}
        </Flex>
      </form>
    </FormProvider>
  );
}
