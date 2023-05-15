import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import AdminTodoList from "../components/AdminTodoList";

export default function Home() {
  const router = useRouter();
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/auth/signin");
    },
  });

  return (
    <div>
      <AdminTodoList />
    </div>
  );
}
