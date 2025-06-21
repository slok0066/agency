import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = (props: any) => <Sonner {...props} />;

export { Toaster, toast }
