import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useRedirectAuthorized } from "@hooks/useRedirectAuthorized";
import {
  Margin,
  Button,
  ErrorText,
  Form,
  Position,
  LinkBG,
} from "@atoms/index";
import { InputLabelController } from "@molecules/account/InputLabel";
import { useRegistrationMutation } from "@redux/api/authApi";
import { useTranslation } from "react-i18next";

type FormValues = {
  username: string;
  email: string;
  password1: string;
  password2: string;
};

export const RegistrationForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  useRedirectAuthorized();
  const [registration] = useRegistrationMutation();
  const { t } = useTranslation()
  const onSubmit = (data: FormValues) => {
    registration(data);
    navigate("/auth/login");
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputLabelController
        text={t('username')}
        control={control}
        name="username"
        rules={{
          required: t('requiredUsername'),
        }}
      />
      <Margin mt={15}>
        <InputLabelController
          text={t('email')}
          control={control}
          name="email"
          rules={{
            required: t('requiredEmail'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message:  t('invalidEmail'),
            },
          }}
        />
      </Margin>
      <Margin mt={15}>
        <InputLabelController
          text={t('password')}
          attrType="password"
          control={control}
          name="password1"
          rules={{ required: t('requiredPassword') }}
        />
      </Margin>
      <Margin mt={15}>
        <InputLabelController
          text={t('password2')}
          attrType="password"
          control={control}
          name="password2"
          rules={{ required: t('requiredPassword2') }}
        />
      </Margin>
      <Margin mt={25} mb={15}>
        <LinkBG href="/auth/login" text={t('login')} />
      </Margin>
      <Margin mt={15}>
        <Button fill={true}>{t('registration')}</Button>
      </Margin>
      <Margin mt={30}>
        <Position position="absolute">
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <br />
          {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
          <br />
          {errors.password1 && (
            <ErrorText>{errors.password1.message}</ErrorText>
          )}
          <br />
          {errors.password2 && (
            <ErrorText>{errors.password2.message}</ErrorText>
          )}
        </Position>
      </Margin>
    </Form>
  );
};
