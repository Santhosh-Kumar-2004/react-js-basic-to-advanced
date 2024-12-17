import { Avatar } from "@lemonsqueezy/wedges";

export function Avatar_Comp() {
  return (
    <>
        <div>
            <div className="flex items-center justify-center paddingVertical: 10,">
                <Avatar
                    alt="Max Quest"
                    size="xl"
                    src="https://images.unsplash.com/photo-1560800452-f2d475982b96?w=250&h=250&auto=format&fit=crop" />
            </div>
            <hr />
            <div className="flex items-center justify-center">
                <Avatar
                    alt="Max Quest"
                    size="lg"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
                    status="green"
                    notification="red"
                    initials="MQ" />
            </div>
            <hr />
            <div className="flex items-center justify-center gap-6">
                <Avatar
                alt="Max Quest"
                size="xxs"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
                status="green"
                notification="red"
                />
        
                <Avatar
                alt="Max Quest"
                size="xs"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
                status="green"
                notification="red"
                />
        
                <Avatar
                alt="Max Quest"
                size="sm"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
                status="green"
                notification="red"
                />
        
                <Avatar
                alt="Max Quest"
                size="md"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
                status="green"
                notification="red"
                />
        
                <Avatar
                alt="Max Quest"
                size="lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
                status="green"
                notification="red"
                />
        
                <Avatar
                alt="Max Quest"
                size="2xl"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
                status="green"
                notification="red"
                />
            </div>
        
            <div className="mt-12 flex items-center justify-center gap-6">
                <Avatar alt="Max Quest" size="xxs" status="green" notification="red" />
                <Avatar alt="Max Quest" size="xs" status="green" notification="red" />
                <Avatar alt="Max Quest" size="sm" status="green" notification="red" />
                <Avatar alt="Max Quest" size="md" status="green" notification="red" />
                <Avatar alt="Max Quest" size="lg" status="green" notification="red" />
                <Avatar alt="Max Quest" size="2xl" status="green" notification="red" />
            </div>
        
            <div className="mt-12 flex items-center justify-center gap-6">
                <Avatar alt="Max Quest" initials="W" size="xxs" status="green" notification="red" />
                <Avatar alt="Max Quest" initials="E" size="xs" status="green" notification="red" />
                <Avatar alt="Max Quest" initials="d" size="sm" status="green" notification="red" />
                <Avatar alt="Max Quest" initials="g" size="md" status="green" notification="red" />
                <Avatar alt="Max Quest" initials="E" size="lg" status="green" notification="red" />
                <Avatar alt="Max Quest" initials="S" size="2xl" status="green" notification="red" />
            </div>     
        </div>
    </>
  );
}
