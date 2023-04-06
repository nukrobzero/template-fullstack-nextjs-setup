import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prisma: PrismaClient;
  }
  interface Window {
    // Declare the HubSpotConversations object
    HubSpotConversations: {
      widget: {
        load: () => void;
      };
    };
  }
}
