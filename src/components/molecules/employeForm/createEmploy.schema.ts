import { z } from "zod";

export const createEmployeFormSchema = z.discriminatedUnion(
  "employer_dont_use_api",
  [
    z.object({
      active: z.boolean().optional(),
      name: z
        .string()
        .min(1, "O nome é obrigatório")
        .regex(/^[A-Za-z]+$/i, "é permitido adicionar apenas letras"),
      gender: z
        .string()
        .min(1, "O sexo é obrigatório")
        .regex(/^[A-Za-z]+$/i, "é permitido adicionar apenas letras"),
      CPF: z
        .string()
        .min(1, "O CPF é obrigatório")
        .regex(
          /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
          "digite um CPF válido"
        ),
      RG: z
        .string()
        .min(8, "O RG é obrigatório")
        .max(8, "Digite um RG válido")
        .regex(/^[0-9]+$/i, "É permitido adicionar apenas números"),
      birth_date: z.string().min(1, "A data de nascimento é obrigatório"),
      position: z.string().min(1, "O cargo é obrigatório"),
      employer_dont_use_api: z.literal(false),
      activities: z.array(
        z.object({
          id: z.string(),
          activity: z.string().min(1, "A atividade é obrigatório"),
          epis: z.array(
            z.object({
              id: z.string(),
              ca_number: z.string().min(1, "CA é obrigatório"),
              epi: z.string().min(1, "O EPI é obrigatório"),
            })
          ),
        })
      ),
    }),
    z.object({
      active: z.boolean().optional(),
      name: z
        .string()
        .min(1, "O nome é obrigatório")
        .regex(/^[A-Za-z]+$/i, "é permitido adicionar apenas letras"),
      gender: z
        .string()
        .min(1, "O sexo é obrigatório")
        .regex(/^[A-Za-z]+$/i, "é permitido adicionar apenas letras"),
      CPF: z
        .string()
        .min(1, "O CPF é obrigatório")
        .regex(
          /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
          "digite um CPF válido"
        ),
      RG: z
        .string()
        .min(8, "O RG é obrigatório")
        .max(8, "Digite um RG válido")
        .regex(/^[0-9]+$/i, "É permitido adicionar apenas números"),
      birth_date: z.string().min(1, "A data de nascimento é obrigatório"),
      position: z.string().min(1, "O cargo é obrigatório"),
      employer_dont_use_api: z.literal(true),
    }),
  ]
);
export type FormProps = z.infer<typeof createEmployeFormSchema>;
