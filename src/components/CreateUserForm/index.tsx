import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { Flex, Button } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";

import Step01 from "./Step01";
import Step02 from "./Step02";
import Step03 from "./Step03";
import Step04 from "./Step04";

export default function CreateUserForm() {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });
  const steps = [1, 2, 3];

  const methods = useForm();

  function onSubmit(values: FieldValues) {
    console.log({ values });
    nextStep();
  }

  function handleShowCurrentStep() {
    switch (activeStep) {
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
    if (activeStep === 3) return;

    return (
      <Flex justifyContent="space-between" mt={10}>
        <Button isDisabled={activeStep === 0} onClick={prevStep}>
          Voltar
        </Button>
        <Button
          type="submit"
          bg={activeStep === 2 ? "#38A169" : "default"}
          color={activeStep === 2 ? "#fff" : "current"}
        >
          {activeStep === 2 ? "Enviar" : "Próximo"}
        </Button>
      </Flex>
    );
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Flex
            flexDir="column"
            p={20}
            width={["100%", "", "500px"]}
            borderRadius={["none", "", 27]}
            border={["none", "", "1px solid #1e3a4330"]}
            boxShadow={["none", "", "xl"]}
          >
            {activeStep !== 3 && (
              <Steps activeStep={activeStep} responsive={false}>
                {steps.map(() => (
                  <Step mb={10} />
                ))}
              </Steps>
            )}

            {handleShowCurrentStep()}

            {renderButton()}
          </Flex>
        </form>
      </FormProvider>
    </>
  );
}
