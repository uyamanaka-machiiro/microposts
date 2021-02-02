<script src="./SignInForm.ts"></script>

<template>
  <div>
    <b-form @submit="onSubmit">
      <FormLabel label="email" label-for="signin-email">
        <InputEmail
          id="signin-email"
          v-model="email"
          name="email"
          size="md"
          required
        />
      </FormLabel>
      <FormLabel label="password" label-for="signin-password">
        <InputPassword
          id="signin-password"
          v-model="password"
          name="password"
          size="md"
          required
        />
      </FormLabel>
      <br />
      <SubmitButton block>Sign In</SubmitButton>
    </b-form>
  </div>
</template>
