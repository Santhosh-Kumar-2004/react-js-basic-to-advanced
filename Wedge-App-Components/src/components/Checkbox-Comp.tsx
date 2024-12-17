import { Checkbox, CheckboxGroup } from "@lemonsqueezy/wedges";
import { AvatarGroup } from "@lemonsqueezy/wedges";

export function Check_Box_Comp() {
  return (
    <>
        <div className="m-auto flex w-fit flex-col gap-6 text-left">
        <Checkbox label="Required" required />

        <Checkbox
            description="(optional)"
            helperText="Helper text"
            label="Label"
            tooltip="Tooltip example"
        />

        <Checkbox
            helperText="Indeterminate"
            label="Label"
            tooltip="Tooltip example"
            checked="indeterminate"
        />

        <Checkbox defaultChecked disabled description="Disabled" tooltip="Tooltip example" />
        </div>
    </>
  );
}
