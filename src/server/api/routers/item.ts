import { z } from "zod";
import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { API_BASE, AUTH, type Items, Item } from "~/utils/loyverse";

// warning: NOT Items. Item[] is NOT Items.
const cleanItem = (items: Item[]): Item[] => {
  return items;
}

export const itemRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ }) => {
      const { data }: { data: Items } = await axios.get(API_BASE + "/items", {
        headers: {
          'Authorization': AUTH
        }
      });
      return data;
    }),
  getInventory: publicProcedure
    .query(async ({ }) => {
      const { data } = await axios.get(API_BASE + "/inventory", {
        headers: {
          'Authorization': AUTH
        }
      });
      console.log(data);
      return data;
    }),
});
