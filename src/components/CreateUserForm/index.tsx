import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { Flex, Button } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { toast, ToastOptions } from "react-toastify";

import { Step01, Step02, Step03, Step04 } from "./steps";

import { useUser } from "../../context/userContext";

export default function CreateUserForm() {
  const { createNewUser } = useUser();
  const { nextStep, prevStep, setStep, activeStep } = useSteps({
    initialStep: 0,
  });
  const steps = [1, 2, 3];

  const methods = useForm();

  const toastConfig: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  function onSubmit(values: FieldValues) {
    const tempUserData = {
      firstName: values.firstName,
      lastName: values.firstName,
      email: values.email,
      phone: values.phone,
      address: {
        cep: values.cep,
        state: values.state,
        city: values.city,
        district: values.district,
        street: values.street,
        houseNumber: values.houseNumber,
      },
      birthDate: values.birthDate,
      cpf: values.cpf,
      salary: values.salary,
    };

    if (activeStep !== 2) {
      nextStep();
    } else {
      createNewUser(tempUserData);

      toast.success("Usuário cadastrado com sucesso", toastConfig);
      nextStep();
    }
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
                {steps.map((item) => (
                  <Step key={item} mb={10} />
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
