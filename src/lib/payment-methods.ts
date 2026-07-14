// Edit these account details anytime — they render on the checkout page.
export type PaymentMethod = {
  id: "easypaisa" | "allied";
  name: string;
  accountTitle: string;
  accountNumber: string;
  extra?: string;
};

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "easypaisa",
    name: "Easypaisa",
    accountTitle: "Abdul Samad Javeed",
    accountNumber: "03478924066",
    extra: "Send to the number above and upload the screenshot below.",
  },
  {
    id: "allied",
    name: "Allied Bank",
    accountTitle: "Abdul Samad Javed",
    accountNumber: "03940010125976930010",
  },
];
