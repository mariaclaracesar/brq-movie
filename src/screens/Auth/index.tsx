import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import theme from "@styles/theme";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { ProfileIcon } from "@assets/Icons/ProfileIcon";
import { LockIcon } from "@assets/Icons/LockIcon";
import Logo from "@assets/logo.png";
import { useAuth } from "@hooks/useAuth";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RoutesName } from "@utils/routesName";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import * as yup from "yup";

type FormData = {
  userName: string;
  password: string;
};

const signInSchema = yup.object({
  userName: yup.string().required("Informe o nome."),
  password: yup
    .string()
    .required("Informe a senha")
    .min(3, "A senha deve ter pelo menos 3 dígitos."),
});

export function Auth() {
  const { signIn } = useAuth();

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(signInSchema),
  });

  const navigation = useNavigation();

  async function handleSignIn({ userName, password }: FormData) {
    const response = await signIn(userName, password);
    if (response) {
      return navigation.navigate(RoutesName.HOME);
    }
    Alert.alert("Usuário inválido");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.ImageLogo>
            <S.Image source={Logo} />
          </S.ImageLogo>

          <S.Inputs>
            <Controller
              control={control}
              name="userName"
              rules={{ required: "Informe o nome" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Usuario"
                  placeholderTextColor={theme.colors.Secondary}
                  leftIcon={<ProfileIcon />}
                  onChangeText={onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: "Informe a senha" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  placeholderTextColor={theme.colors.Secondary}
                  leftIcon={<ProfileIcon />}
                  rightIcon={<LockIcon />}
                  onChangeText={onChange}
                  secureTextEntry
                />
              )}
            />
          </S.Inputs>

          <S.ButtonDock>
            <Button label="Entrar" onPress={handleSubmit(handleSignIn)} />
          </S.ButtonDock>

          <S.TextPassword>
            <S.ForgotPassword>Esqueci a senha</S.ForgotPassword>
          </S.TextPassword>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
