import { useFormContext } from "react-hook-form";
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import inputMask from "react-input-mask";
import { InputsArrProps } from "../../types/InputsTypes";
import { Step01InputsArr } from "./InputsArr";

export default function Step01() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Flex flexDir="column">
      {Step01InputsArr.map(
        ({
          inputName,
          label,
          placeHolder,
          validations,
          mask,
        }: InputsArrProps) => (
          <FormControl key={inputName} isInvalid={errors[inputName]}>
            <FormLabel htmlFor={inputName}>{label}</FormLabel>
            <Input
              as={mask ? inputMask : Input}
              mask={mask && mask}
              id={inputName}
              placeholder={placeHolder}
              {...register(inputName, validations)}
            />
            <FormErrorMessage>
              {`${errors[inputName]}` && `${errors[inputName]?.message}`}
            </FormErrorMessage>
          </FormControl>
        )
      )}
    </Flex>
  );
}
