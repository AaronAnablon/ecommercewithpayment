import { cn } from "@/lib/utils";

type Props = {
  amount: number;
  className?: string;
};

const FormattedPrice = ({ amount, className }: Props) => {
  // Handle undefined, null, or NaN values
  const validAmount = typeof amount === 'number' && !isNaN(amount) ? amount : 0;
  
  const formattedAmount = new Number(validAmount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return (
    <span className={cn("text-base text-black", className)}>
      {formattedAmount}
    </span>
  );
};

export default FormattedPrice;
