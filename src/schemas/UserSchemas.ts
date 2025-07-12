import { z } from "zod";

export const UserSchemas = {
  createUser: z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("Formato de email inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    sexo: z.enum(["masculino", "feminino", "outro"], { message: "Sexo é obrigatório" }),
    birthDate: z.string().min(1, "Data de nascimento é obrigatória").refine(
      (val) => {
        const birthDate: Date = new Date(val);
        const today: Date = new Date();
        const age: number = today.getFullYear() - birthDate.getFullYear();
        const monthDiff: number = today.getMonth() - birthDate.getMonth();
        const dayDiff: number = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 1)) {
          return age - 1 >= 18;
        }
        return age >= 18;
      },
      { message: "Você deve ter pelo menos 18 anos" }
    ),
  }),
};