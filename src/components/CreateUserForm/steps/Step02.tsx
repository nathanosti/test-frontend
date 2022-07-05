import { useFormContext } from "react-hook-form";
import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import inputMask from "react-input-mask";
import { InputsArrProps } from "../../../types/InputsTypes";
import { Step02InputsArr } from "../InputsArr";

export default function Step02() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Flex flexDir="column">
      {Step02InputsArr.map(
        ({
          inputName,
          label,
          placeHolder,
          validations,
          mask,
        }: InputsArrProps) => (
          <FormControl key={inputName} isInvalid={errors[inputName] && Boolean(errors[inputName])}>
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
