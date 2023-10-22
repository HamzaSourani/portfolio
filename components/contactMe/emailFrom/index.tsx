"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Z from "zod";
import { useTranslation } from "@/i18n/client";
import { IoMdSend } from "react-icons/io";
import { CgSpinner } from "react-icons/cg";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { LngProps } from "@/app/type";
import { useToast } from "@/components/ui/use-toast";
const EmailFrom = ({ lng }: LngProps) => {
  const { t } = useTranslation(lng, "contactMe");
  const { toast } = useToast();
  const defaultValues: Z.infer<typeof formSchema> = {
    email: "",
    subject: "",
    text: "",
  };
  const formSchema = Z.object({
    email: Z.string({ required_error: t("form.validations.requied") }).email({
      message: t("form.validations.email"),
    }),
    subject: Z.string({ required_error: t("form.validations.requied") }).min(
      3,
      { message: t("form.validations.min-to", { number: 3 }) },
    ),
    text: Z.string({ required_error: t("form.validations.requied") })
      .min(20, { message: t("form.validations.min-to", { number: 50 }) })
      .max(100, { message: t("form.validations.max-to", { number: 300 }) }),
  });
  const form = useForm<Z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const handleShowToast = () => {
    toast({
      description: t("toast.success"),
    });
  };
  const handleSendUserEmail = async (values: Z.infer<typeof formSchema>) => {
    try {
      await fetch("/contactMe/api", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });
      form.reset();
      toast({
        description: t("toast.success"),
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: t("toast.error"),
      });
    }
  };
  return (
    <div className="w-[90vw] md:w-[80vw] lg:w-[50vw]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSendUserEmail)}
          className="grid grid-flow-row-dense grid-cols-1 justify-center  gap-4 rtl:space-x-reverse md:grid-cols-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.labels.email")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder={t("form.placeholders.email")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.labels.subject")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("form.placeholders.subject")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>{t("form.labels.text")}</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    className="resize-none"
                    placeholder={t("form.placeholders.text")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" self-start">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              size={"sm"}
            >
              {form.formState.isSubmitting ? (
                <CgSpinner className="mr-1 animate-spin rtl:ml-1 rtl:mr-0" />
              ) : (
                <IoMdSend className="mr-1 rtl:ml-1 rtl:mr-0" />
              )}
              {t("form.submit")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EmailFrom;
