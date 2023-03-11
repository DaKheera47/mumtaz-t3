import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const listeningRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.listenings.findMany();
  }),
});
