"use server";

import { revalidatePath } from "next/cache";
import prisma from "./utils/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";

export async function addTowatchlist(formData: FormData) {
  "use server";

  const movieId = formData.get("movieId");
  const pathName = formData.get("pathName") as string;
  const session = await getServerSession(authOptions);

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathName);
}

export async function deleteFromWatchlist(formData: FormData) {
  "use server";

  const WatchListId = formData.get("WatchListId") as string;
  const pathName = formData.get("pathName") as string;

  const data = await prisma.watchList.delete({
    where: {
      id: WatchListId,
    },
  });

  revalidatePath(pathName);
}
