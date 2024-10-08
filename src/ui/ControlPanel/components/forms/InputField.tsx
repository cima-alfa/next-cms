"use client";

import { FormState } from "@lib/actions/definitions";
import { useId } from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  state: FormState;
}

export default function InputField({
  label,
  name,
  type = "text",
  state,
  className,
  ...rest
}: FieldProps) {
  const id = useId();

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          id={id}
          name={name}
          type={type}
          aria-describedby={`${id}-error`}
          className="block w-full py-2 rounded-md border bg-slate-100 !border-slate-300 dark:bg-slate-900 dark:!border-slate-700 !ring-0 outline-2 focus:outline-offset-0 focus:outline-sky-500 placeholder:text-gray-500 disabled:text-gray-500"
          {...rest}
        />
        <div id={`${id}-error`} aria-live="polite" aria-atomic="true">
          {state?.errors &&
            state.errors[name] &&
            state.errors[name].map((error, index) => (
              <p className="mt-2 text-sm text-red-500" key={index}>
                {error}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
