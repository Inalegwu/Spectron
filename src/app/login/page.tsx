import { lucia } from "@/auth";
import Button from "@/components/button";
import db from "@/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string({
    invalid_type_error: "Invalid Email",
  }),
  password: z
    .string({
      invalid_type_error: "Invalid Password",
    })
    .max(16)
    .min(8),
});

async function login(formData: FormData): Promise<ActionResult> {
  "use server";

  const validated = loginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  if (!validated.success) {
    return {
      error: validated.error.flatten().fieldErrors,
    };
  }

  const existingUser = await db.query.userTable.findFirst({
    where: (fields, { eq }) => eq(fields.username, validated.data.username),
  });

  if (!existingUser) {
    return {
      error: "Incorrect username or password",
    };
  }

  const validPassword = await new Argon2id().verify(
    existingUser.hashed_password,
    validated.data.password,
  );

  if (!validPassword) {
    return {
      error: "Invalid username or password",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/");
}

interface ActionResult {
  error: unknown;
}

export default async function Page() {
  return (
    <main className="w-full h-screen bg-slate-100 flex items-center justify-center">
      <form
        action={login}
        className="w-4/6 h-4/6 px-5 py-10 bg-white rounded-md flex flex-col items-start justify-center space-y-4"
      >
        <h1>Sign in</h1>

        <label htmlFor="username">Username</label>
        <input
          className="bg-slate-100 rounded-md p-2"
          name="username"
          id="username"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          className="bg-slate-100 rounded-md p-2"
          type="password"
          name="password"
          id="password"
        />
        <br />
        <Button
          type="submit"
          intent="primary"
          className="p-2 rounded-md bg-purple-500 text-purple-700"
        >
          Continue
        </Button>
      </form>
    </main>
  );
}
