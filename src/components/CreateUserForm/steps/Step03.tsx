import { useFormContext } from "react-hook-form";
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import inputMask from "react-input-mask";
import { InputsArrProps } from "../../../types/InputsTypes";
import { Step03InputsArr } from "../InputsArr";

export default function Step03() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Flex flexDir="column">
      {Step03InputsArr.map(
        ({
          inputName,
          label,
          placeHolder,
          validations,
          mask,
        }: InputsArrProps) => (
          <FormControl
            key={inputName}
            isInvalid={errors[inputName] && Boolean(errors[inputName])}
          >
            <FormLabel htmlFor={inputName}>{label}</FormLabel>
            <InputGroup>
              {inputName === "salary" && <InputLeftAddon>R$</InputLeftAddon>}
              <Input
                type={inputName === "birthDate" ? "date" : "text"}
                as={mask ? inputMask : Input}
                mask={mask && mask}
                id={inputName}
                placeholder={placeHolder}
                {...register(inputName, validations)}
              />
            </InputGroup>
            <FormErrorMessage>
              {`${errors[inputName]}` && `${errors[inputName]?.message}`}
            </FormErrorMessage>
          </FormControl>
        )
      )}
    </Flex>
  );
}
