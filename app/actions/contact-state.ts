export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};
