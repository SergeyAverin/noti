import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "@redux/api/authApi";
import {
  Margin,
  SubmitButton,
  ErrorText,
  Form,
  Position,
  LinkBG,
} from "@atoms/index";
import { InputLabelController } from "@molecules/InputLabel";
import { useTranslation } from "react-i18next";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [login, { isError, error }] = useLoginMutation();
  const navigate = useNavigate();

  const { t } = useTranslation()

  const onSubmit = (data: FormValues) => {
    login(data).then(() => {
      if (!isError) {
        navigate("/");
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputLabelController
        text={t('email')}
        control={control}
        name="email"
        rules={{
          required: t('requiredEmail'),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: t('invalidEmail'),
          },
        }}
      />
      <Margin mt={15}>
        <InputLabelController
          text={t('password')}
          attrType="password"
          control={control}
          name="password"
          rules={{ required: t('requiredPassword') }}
        />
      </Margin>
      <Margin mt={25} mb={15}>
        <LinkBG href="/auth/registration" text={t('registration')} />
      </Margin>
      <Margin mt={15}>
        <SubmitButton value={t('login')} />
      </Margin>
      <Margin mt={30}>
        <Position position="absolute">
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          <br />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          {isError && <ErrorText>{t('authFail')}</ErrorText>}
        </Position>
      </Margin>
    </Form>
  );
};
