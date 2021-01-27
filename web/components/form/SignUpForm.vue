<script src="./SignUpForm.ts"></script>

<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <FormLabel label="email" label-for="signup-email">
        <InputEmail
          id="signup-email"
          v-model="email"
          name="email"
          size="md"
          required
        />
      </FormLabel>
      <FormLabel label="name" label-for="signup-name">
        <InputText
          id="signup-name"
          v-model="name"
          name="name"
          size="md"
          required
        />
      </FormLabel>
      <FormLabel label="password" label-for="signup-password">
        <InputPassword
          id="signup-password"
          v-model="password"
          name="password"
          size="md"
          required
        />
      </FormLabel>
      <InputPassword
        id="signup-password-confirmation"
        v-model="passwordConfirmation"
        placeholder="もう一度入力してください"
        name="password-confirmation"
        size="md"
        required
      />
      <br />
      <SubmitButton block>Sign Up</SubmitButton>
    </b-form>
  </div>
</template>
