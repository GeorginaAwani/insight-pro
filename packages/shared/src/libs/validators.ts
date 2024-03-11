import * as z from "zod"

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "Invalid email format"
    })
    .email({ message: "Invalid email format" }),
  password: z.string().min(1, { message: "Please enter your password" })
})

export const registerSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "Invalid email format"
    })
    .email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must have at least 8 characters" })
    .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
      message: "Password must contain one special character"
    })
    .regex(/[A-Z]/, {
      message: "Password must contain one uppercase character"
    })
    .regex(/[0-9]/, {
      message: "Password must contain one number"
    })
    .regex(/[a-z]/, {
      message: "Password must contain one lowercase character"
    })
})

export const forgotPasswordSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "Invalid email format"
    })
    .email({ message: "Invalid email format" })
})

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must have at least 8 characters" })
      .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
        message: "Password must contain one special character"
      })
      .regex(/[A-Z]/, {
        message: "Password must contain one uppercase character"
      })
      .regex(/[0-9]/, {
        message: "Password must contain one number"
      })
      .regex(/[a-z]/, {
        message: "Password must contain one lowercase character"
      }),
    confirmPassword: z.string(),
    otp: z.string()
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords do not match",
        path: ["confirmPassword"]
      })
    }
  })

export const onboardSchema = z.object({
  fullName: z.string({}),
  churchName: z.string({}),
  positionHeld: z.string({}),
  memberRange: z.string({})
})
