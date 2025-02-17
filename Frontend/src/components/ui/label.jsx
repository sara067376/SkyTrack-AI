import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import classNames from "classnames"; // Assuming you're using classnames for merging classes

// Define label variants using cva
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

// Create Label component using Radix UI
const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={classNames(labelVariants(), className)} {...props} />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
