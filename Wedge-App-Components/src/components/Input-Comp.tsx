import { Input } from "@lemonsqueezy/wedges";

export function Input_Comp() {
  return (
    <div className="m-auto max-w-sm text-left">
      <Input
        required
        label="Label"
        description="(description)"
        placeholder="Placeholder"
        helperText="Helper text"
      />
    </div>
  );
}
