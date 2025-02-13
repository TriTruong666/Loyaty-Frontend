import { Button } from "@heroui/button";

interface GoNextButtonProps {
  title: string;
}

export const GoNextButton: React.FC<GoNextButtonProps> = ({ title }) => {
  return (
    <Button className="w-full" variant="flat" color="secondary">
      <p className="font-bold font-open">{title}</p>
    </Button>
  );
};
