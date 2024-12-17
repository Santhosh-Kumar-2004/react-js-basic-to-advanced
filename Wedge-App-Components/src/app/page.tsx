import Alert_Comp from "@/components/Alert-Comp";
import { Avatar_Comp } from "@/components/Avatar-Comp";
import { Badge_Comp } from "@/components/Badge-Comp";
import { Button_Comp } from "@/components/Button-Comp";
import { Check_Box_Comp } from "@/components/Checkbox-Comp";
import { Dropdown_Comp } from "@/components/Dropdown-Comp";
import { Input_Comp } from "@/components/Input-Comp";
import { Loading_Comp } from "@/components/Loading-Comp";
import { Progress_Comp } from "@/components/Progress-Comp";
import { Select_Comp } from "@/components/Select-Comp";
import { Slider } from "@lemonsqueezy/wedges";
import { Switch } from "@lemonsqueezy/wedges";
import { Tabs } from "@lemonsqueezy/wedges";
import { Tag } from "@lemonsqueezy/wedges";
import { Textarea } from "@lemonsqueezy/wedges";
import { Toggle } from "@lemonsqueezy/wedges";
import { Tooltip } from "@lemonsqueezy/wedges";


export default function Example() {
  return (
    <>
      {/* <Alert_Comp/> */}
      {/* <Avatar_Comp/> */}
      {/* <Badge_Comp/> */}
      {/* <Button_Comp/> */}
      {/* <Check_Box_Comp/> */}
      {/* <Dropdown_Comp/> */}
      {/* <Input_Comp/> */}
      {/* <Loading_Comp/> */}
      {/* <Progress_Comp/> */}
      {/* <Slider/> */}
      {/* <Select_Comp/> */}
      <Tag closable>Tag</Tag>
      <Textarea />
      <Toggle>Toggle</Toggle>
      <Tooltip content="Tooltip Content" />
    </>
  );
};
