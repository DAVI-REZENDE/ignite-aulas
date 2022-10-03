import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RiSave3Line } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from 'react-query'
import { api } from "../../services/api";
import { queryClient } from "../../services/QueryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatorio'),
  email: yup.string().required(' E-mail obrigatorio').email('E-mail invalido'),
  password: yup.string().required('Senha obrigratoria').min(6, 'No minimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas presisam ser iguais')
})


export default function CreateUser() {
  const router = useRouter()

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        created_at: new Date()
      }
    })

    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState
  
  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await createUser.mutateAsync(values)

    router.push('/users')
  }

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6","8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar Usuario</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                {...register('name')}
                error={errors.name}
                name="name"
                label="Nome completo" />
              <Input
                {...register('email')}
                error={errors.email}
                name="email"
                type="email"
                label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                {...register('password')}
                error={errors.password}
                name="password"
                type="password"
                label="Senha" />
              <Input
                {...register('password_confirmation')}
                error={errors.password_confirmation}
                name="password_confirmation"
                type="password"
                label="Confirmação da senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt={["6", "8"]} justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                >Cancelar</Button>
              </Link>
              <Button
                leftIcon={<Icon
                as={RiSave3Line}
                fontSize="20"
                />}
                colorScheme="pink"
                isLoading={formState.isSubmitting}
                type="submit"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  )
}