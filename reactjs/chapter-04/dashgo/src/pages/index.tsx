import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm} from 'react-hook-form'
import { Input } from "../components/Form/Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required(' E-mail obrigatorio').email('E-mail invalido'),
  password: yup.string().required('Senha obrigratoria')
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const {errors} = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      alignItems="center" 
      justifyContent="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxW="360px"
        bg="gray.800"
        p={8}
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            error={errors.email}
            label="E-mail"
            {...register('email')} 
            />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')} 
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
            Entrar
          </Button>
      </Flex>
    </Flex>
  )
}
